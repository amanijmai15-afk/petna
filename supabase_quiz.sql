-- À exécuter UNE fois : Supabase > SQL Editor > New query > Run
create table if not exists public.quiz_resultats (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  quiz       text not null check (quiz in ('compagnon','animal','animal_partage')),
  resultat   text not null check (char_length(resultat) <= 30),
  score      int
);

alter table public.quiz_resultats enable row level security;

-- Tout visiteur peut enregistrer un résultat (aucune donnée personnelle n'est stockée)
create policy "quiz_insert_public" on public.quiz_resultats
  for insert to anon, authenticated with check (true);

-- Lecture ouverte : sert au compteur "N personnes ont déjà fait ce quiz"
create policy "quiz_select_public" on public.quiz_resultats
  for select to anon, authenticated using (true);
