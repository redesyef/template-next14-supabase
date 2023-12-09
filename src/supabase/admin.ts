import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabase_url: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const service_role_key: string =
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE || '';

const supabase: SupabaseClient = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export const adminAuthClient = supabase;
