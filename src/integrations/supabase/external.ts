// Direct connection to the VYORA.AI-owned Supabase project.
// Contact form messages are stored here (not in the Lovable-managed backend).
import { createClient } from '@supabase/supabase-js';

const EXTERNAL_SUPABASE_URL = 'https://amyttygrcgdsbuonjdlp.supabase.co';
const EXTERNAL_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFteXR0eWdyY2dkc2J1b25qZGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzNTU5OTEsImV4cCI6MjEwMzkzMTk5MX0.CgqkLUu7X_7SV_gKCWNV_hT96DYawILCF6UHRiXJHLk';

export const externalSupabase = createClient(
  EXTERNAL_SUPABASE_URL,
  EXTERNAL_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);
