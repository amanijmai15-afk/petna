

const SUPABASE_URL = "https://xrtvyywjgnlqovctcamb.supabase.co";
const SUPABASE_KEY = "sb_publishable_b4_R3Nmif6Vfmm31Zquw5A_OkUyWNde";

const { createClient } = window.supabase;

window.supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("PETNA connecté à Supabase !");