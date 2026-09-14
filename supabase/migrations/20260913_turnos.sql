create table public.turnos (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  telefono text not null,
  email text,
  servicio text,
  fecha date,
  hora time,
  comentarios text,
  estado text default 'pendiente',
  creado timestamptz default now()
);

create table public.servicios (
  id uuid primary key default gen_random_uuid(),
  nombre text, precio int
);
alter table public.servicios enable row level security;
create policy "todos ven los servicios" on public.servicios for select using (true);
