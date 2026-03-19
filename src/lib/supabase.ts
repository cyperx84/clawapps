import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export interface App {
  id: string;
  user_id: string;
  name: string;
  description: string;
  skill_url: string;
  gateway_url: string;
  api_key: string;
  requests_today: number;
  requests_limit: number;
  created_at: string;
}
