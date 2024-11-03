import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aoynnywfgkvbclivgrlg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFveW5ueXdmZ2t2YmNsaXZncmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5MzQzMjMsImV4cCI6MjA0NTUxMDMyM30.Kl2Crz2EGB2d9FA9WeWU9QJ6YeKCjyCd8Kjk2OM4CmI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);