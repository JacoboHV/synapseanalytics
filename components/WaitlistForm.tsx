"use client";

import { useState, useTransition } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  joinWaitlist,
  type WaitlistPayload,
  type WaitlistResult,
} from "@/app/actions/waitlist";

const SECTORS = [
  "Retail",
  "E-commerce",
  "Consumo masivo",
  "Banca y servicios financieros",
  "Salud y farma",
  "Telecomunicaciones",
  "Tech",
  "Startups",
  "Otro",
] as const;

const EMPTY: WaitlistPayload = {
  name: "",
  email: "",
  phone: "",
  business: "",
  sector: "",
};

export default function WaitlistForm() {
  const [values, setValues] = useState<WaitlistPayload>(EMPTY);
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<WaitlistResult | null>(null);

  const fieldErrors =
    result && !result.ok ? result.fieldErrors ?? {} : {};

  function update<K extends keyof WaitlistPayload>(
    key: K,
    value: WaitlistPayload[K],
  ) {
    setValues((v) => ({ ...v, [key]: value }));
    if (result && !result.ok) setResult(null);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    startTransition(async () => {
      const res = await joinWaitlist(values);
      setResult(res);
      if (res.ok) setValues(EMPTY);
    });
  }

  if (result?.ok) {
    return (
      <div
        className="rounded-md border border-accent/50 bg-accent/10 p-8 sm:p-10 text-left shadow-glow-accent"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2
            className="text-accent shrink-0 mt-0.5"
            size={28}
            strokeWidth={1.6}
          />
          <div>
            <h3 className="font-black tracking-tightest text-2xl sm:text-3xl leading-tight">
              Estás en la lista.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-titanium/85 leading-relaxed">
              Te escribimos apenas abramos el siguiente cupo. Mientras tanto,
              revisa tu bandeja de entrada — es probable que llegue algo
              nuestro pronto.
            </p>
            <button
              type="button"
              onClick={() => setResult(null)}
              className="mt-6 font-mono text-[11px] tracking-widest uppercase text-accent hover:text-accent-hover"
            >
              Registrar a alguien más →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-md border border-hairline bg-obsidian/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10 text-left"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="wl-name"
          label="Nombre"
          type="text"
          value={values.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
          error={fieldErrors.name}
          disabled={pending}
          placeholder="María González"
        />
        <Field
          id="wl-email"
          label="Email"
          type="email"
          value={values.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
          error={fieldErrors.email}
          disabled={pending}
          placeholder="maria@empresa.co"
        />
        <Field
          id="wl-phone"
          label="Teléfono"
          type="tel"
          value={values.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
          error={fieldErrors.phone}
          disabled={pending}
          placeholder="+57 300 000 0000"
        />
        <Field
          id="wl-business"
          label="Negocio"
          type="text"
          value={values.business}
          onChange={(v) => update("business", v)}
          autoComplete="organization"
          error={fieldErrors.business}
          disabled={pending}
          placeholder="Nombre de la empresa"
        />

        <div className="sm:col-span-2">
          <label
            htmlFor="wl-sector"
            className="block font-mono text-[11px] tracking-widest uppercase text-muted"
          >
            Sector
          </label>
          <select
            id="wl-sector"
            value={values.sector}
            onChange={(e) => update("sector", e.target.value)}
            disabled={pending}
            className={`mt-2 w-full rounded-md border bg-obsidian px-4 py-3 text-sm text-titanium outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60 ${
              fieldErrors.sector ? "border-red-500/60" : "border-hairline"
            }`}
          >
            <option value="" disabled>
              Selecciona un sector
            </option>
            {SECTORS.map((s) => (
              <option key={s} value={s} className="bg-obsidian text-titanium">
                {s}
              </option>
            ))}
          </select>
          {fieldErrors.sector && (
            <p className="mt-2 text-xs text-red-400">{fieldErrors.sector}</p>
          )}
        </div>
      </div>

      {result && !result.ok && !Object.keys(fieldErrors).length && (
        <p
          className="mt-6 rounded-md border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {result.error}
        </p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-titanium hover:bg-accent-hover hover:shadow-glow-accent-strong transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {pending ? "Enviando…" : "Entra ya a la lista de espera"}
          {!pending && (
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          )}
        </button>
        <p className="font-mono text-[11px] tracking-widest uppercase text-muted text-center sm:text-left">
          Cupos limitados · Respuesta &lt; 24 h
        </p>
      </div>

      <p className="mt-6 text-xs text-muted leading-relaxed">
        Al enviar aceptas que te contactemos por email o teléfono sobre tu
        registro en Synapse Analytics.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  placeholder,
  error,
  disabled,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] tracking-widest uppercase text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 w-full rounded-md border bg-obsidian px-4 py-3 text-sm text-titanium placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 disabled:opacity-60 ${
          error ? "border-red-500/60" : "border-hairline"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
