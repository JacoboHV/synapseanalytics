# Synapse Analytics — Landing

Landing page de una sola página para **Synapse Analytics**, plataforma de investigación de mercados con IA calibrada para Colombia y Latinoamérica.

> Stop guessing. Run the simulation.

## Stack

- [Next.js 14](https://nextjs.org/) con App Router y TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animaciones de entrada al hacer scroll
- [lucide-react](https://lucide.dev/) — iconografía
- Fuentes: **Inter** (900/500/400) y **JetBrains Mono** vía `next/font/google`

## Correr en local

Requiere Node 18.17+ (recomendado 20+).

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter (Next) |

## Estructura

```
app/
  layout.tsx        # Fuentes, metadata, tema global
  page.tsx          # Composición de secciones
  globals.css       # Tailwind + variables de tema
components/
  Logo.tsx          # SVG del triángulo de puntos + wordmark
  Navbar.tsx        # Nav sticky con menú móvil
  Hero.tsx          # Full-viewport, headline + CTAs
  NeuralBackground.tsx  # Canvas animado de red neuronal
  Reveal.tsx        # Utilidad Framer Motion (fade + slide-up)
  ProblemContrast.tsx
  Solution.tsx
  HowItWorks.tsx
  ReportLayers.tsx
  Sectors.tsx
  Differentiator.tsx
  FinalCTA.tsx
  Footer.tsx
```

## Sistema de diseño

Paleta (Tailwind tokens):

- `bg-obsidian` — `#080808`
- `text-titanium` — `#FFFFFF`
- `text-muted` — `#A0A0A0`
- `bg-accent` / `text-accent` — `#0066FF`
- `bg-accent-hover` — `#3385FF`
- `border-hairline` — `#1A1A1A`

Tipografía:

- Títulos: `font-sans font-black tracking-tightest`
- Cuerpo: `font-sans`
- Métricas / labels técnicos: `font-mono` (JetBrains Mono)

## Lista de espera (Supabase)

El CTA final es un formulario que guarda los leads en una tabla `waitlist` de Supabase. Mientras no configures las variables de entorno, el formulario se muestra pero devuelve un mensaje amable pidiendo que te escriban por correo.

### 1) Crear proyecto en Supabase

1. Entra a [supabase.com](https://supabase.com/) y crea un proyecto nuevo (tier free).
2. En **Project Settings → API** copia:
   - `Project URL` → `SUPABASE_URL`
   - `service_role` key (sección "Project API keys") → `SUPABASE_SERVICE_ROLE_KEY`

> ⚠️ La `service_role` key **nunca** debe exponerse al cliente. Solo se usa desde Server Actions (server-side). Por eso el nombre no lleva `NEXT_PUBLIC_`.

### 2) Crear la tabla `waitlist`

En Supabase, abre **SQL Editor** y ejecuta:

```sql
create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  email        text not null,
  phone        text not null,
  business     text not null,
  sector       text not null,
  source       text,
  ip           inet,
  user_agent   text
);

-- Un mismo correo solo entra una vez a la lista.
create unique index if not exists waitlist_email_unique
  on public.waitlist (lower(email));

-- RLS activo: nadie puede leer ni escribir con la anon key.
-- El Server Action usa la service_role key y bypassa RLS.
alter table public.waitlist enable row level security;
```

### 3) Configurar variables de entorno

```bash
cp .env.local.example .env.local
# edita .env.local con los valores reales
```

Reinicia el dev server. Los leads empezarán a caer en la tabla `waitlist` y los verás en **Table Editor** de Supabase (con opción de exportar CSV).

## Deploy en Vercel

1. Push a un repo de GitHub.
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**.
4. En **Environment Variables** agrega `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`.
5. Deploy.

## Notas de contenido

Reglas estrictas mantenidas en el copy:

- No se menciona tecnología, proveedores ni cantidades de "agentes".
- No se menciona ningún competidor.
- No se muestran precios de Synapse.
- Se usa el gancho comparativo: estudio tradicional USD $40,000 y meses vs. Synapse en minutos.
- Copy en español, excepto el tagline de marca en inglés.
