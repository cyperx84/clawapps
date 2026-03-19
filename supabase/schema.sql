-- ClawApps database schema
-- Run in Supabase SQL Editor

create table apps (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  description text,
  skill_url text,
  gateway_url text,
  api_key text,
  requests_today integer default 0,
  requests_limit integer default 100,
  created_at timestamptz default now()
);

alter table apps enable row level security;

create policy "Users can CRUD their own apps" on apps for all using (auth.uid() = user_id);
