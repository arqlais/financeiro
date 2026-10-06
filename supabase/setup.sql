-- rode este arquivo uma vez no supabase: sql editor > new query > colar > run.
-- antes de rodar, troque os dois emails no final pelos emails de vocês.

create table if not exists public.membros (
  email text primary key
);

create table if not exists public.lancamentos (
  id text primary key,
  doc jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.membros enable row level security;
alter table public.lancamentos enable row level security;

-- true quando o email de quem está logado está na tabela membros
create or replace function public.e_membro() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.membros where lower(email) = lower(auth.jwt() ->> 'email'));
$$;

drop policy if exists "ver o proprio email" on public.membros;
create policy "ver o proprio email" on public.membros
  for select to authenticated using (lower(email) = lower(auth.jwt() ->> 'email'));

drop policy if exists "membros leem" on public.lancamentos;
drop policy if exists "membros inserem" on public.lancamentos;
drop policy if exists "membros alteram" on public.lancamentos;
drop policy if exists "membros apagam" on public.lancamentos;
create policy "membros leem"    on public.lancamentos for select to authenticated using (public.e_membro());
create policy "membros inserem" on public.lancamentos for insert to authenticated with check (public.e_membro());
create policy "membros alteram" on public.lancamentos for update to authenticated using (public.e_membro()) with check (public.e_membro());
create policy "membros apagam"  on public.lancamentos for delete to authenticated using (public.e_membro());

-- atualização ao vivo entre os dois celulares
do $$ begin
  alter publication supabase_realtime add table public.lancamentos;
exception when duplicate_object then null; end $$;

-- quem pode entrar (troque pelos emails de vocês)
insert into public.membros (email) values
  ('email-da-lais@exemplo.com'),
  ('email-do-igor@exemplo.com')
on conflict do nothing;
