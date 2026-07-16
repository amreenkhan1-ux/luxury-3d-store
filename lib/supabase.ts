import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Ye global check zaroori hai taaki multiple instances na bane
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
