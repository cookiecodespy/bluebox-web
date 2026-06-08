-- BlueBox — captura de leads del formulario de contacto.
-- Córrelo en el SQL editor de tu proyecto Supabase (o vía `supabase db push`).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  reason text,
  message text not null,
  source text default 'web'
);

alter table public.leads enable row level security;

-- El formulario es público: anon puede INSERTAR, pero nadie anónimo puede LEER.
-- (Los leads se consultan con la service key / dashboard, no desde el navegador.)
drop policy if exists "anon inserts leads" on public.leads;
create policy "anon inserts leads"
  on public.leads for insert
  to anon
  with check (true);
