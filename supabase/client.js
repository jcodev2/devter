import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4amxvZGdvdGZoaGticmtva29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwNTIxODgsImV4cCI6MTk3MjYyODE4OH0.QjMOHlF1AqkGi6rCEmu_WfTXailoGi7pbjoFwU2orh4'

const SUPABASE_URL = 'https://txjlodgotfhhkbrkokol.supabase.co'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase
