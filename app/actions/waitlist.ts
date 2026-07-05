"use server";

import { headers } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export type WaitlistPayload = {
  name: string;
  email: string;
  phone: string;
  business: string;
  sector: string;
};

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Partial<Record<keyof WaitlistPayload, string>> };

const SECTORS = new Set([
  "Retail",
  "E-commerce",
  "Consumo masivo",
  "Banca y servicios financieros",
  "Salud y farma",
  "Telecomunicaciones",
  "Tech",
  "Startups",
  "Otro",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(input: WaitlistPayload) {
  const fieldErrors: Partial<Record<keyof WaitlistPayload, string>> = {};
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim().toLowerCase() ?? "";
  const phone = input.phone?.trim() ?? "";
  const business = input.business?.trim() ?? "";
  const sector = input.sector?.trim() ?? "";

  if (name.length < 2) fieldErrors.name = "Ingresa tu nombre.";
  if (name.length > 120) fieldErrors.name = "Nombre demasiado largo.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Correo inválido.";
  if (phone.length < 7) fieldErrors.phone = "Teléfono inválido.";
  if (phone.length > 40) fieldErrors.phone = "Teléfono demasiado largo.";
  if (business.length < 2) fieldErrors.business = "Cuéntanos de qué negocio vienes.";
  if (business.length > 160) fieldErrors.business = "Nombre demasiado largo.";
  if (!SECTORS.has(sector)) fieldErrors.sector = "Selecciona un sector.";

  return {
    ok: Object.keys(fieldErrors).length === 0,
    fieldErrors,
    cleaned: { name, email, phone, business, sector },
  };
}

export async function joinWaitlist(
  input: WaitlistPayload,
): Promise<WaitlistResult> {
  const v = validate(input);
  if (!v.ok) {
    return {
      ok: false,
      error: "Revisa los campos marcados.",
      fieldErrors: v.fieldErrors,
    };
  }

  const supabase = getSupabaseAdmin();

  // If Supabase isn't configured yet, fail gracefully so the app still runs
  // in local dev without credentials.
  if (!supabase) {
    console.warn(
      "[waitlist] Supabase not configured — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. Payload:",
      v.cleaned,
    );
    return {
      ok: false,
      error:
        "Estamos habilitando el registro. Escríbenos a hola@synapse-analytics.co y te sumamos manualmente.",
    };
  }

  const hdrs = await headers();
  const userAgent = hdrs.get("user-agent") ?? null;
  const forwardedFor = hdrs.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : null;

  const { error } = await supabase.from("waitlist").insert({
    name: v.cleaned.name,
    email: v.cleaned.email,
    phone: v.cleaned.phone,
    business: v.cleaned.business,
    sector: v.cleaned.sector,
    source: "landing",
    ip,
    user_agent: userAgent,
  });

  if (error) {
    // Postgres unique-violation on email
    if (error.code === "23505") {
      return { ok: true };
    }
    console.error("[waitlist] insert failed", error);
    return {
      ok: false,
      error: "No pudimos guardar tu registro. Intenta de nuevo en un momento.",
    };
  }

  return { ok: true };
}
