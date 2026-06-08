import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Captura de leads del formulario. Se activa cuando existen las env vars;
// si no, submitLead devuelve {ok:false, reason:"not-configured"} y el form
// cae con gracia a mailto. Ver .env.local.example y supabase/schema.sql.

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseEnabled = Boolean(url && anon);

let client: SupabaseClient | null = null;
function getSupabase(): SupabaseClient | null {
  if (!supabaseEnabled) return null;
  if (!client) client = createClient(url as string, anon as string);
  return client;
}

export interface LeadInput {
  name: string;
  email: string;
  company?: string;
  reason?: string;
  message: string;
}

export async function submitLead(
  lead: LeadInput
): Promise<{ ok: boolean; reason?: string }> {
  const sb = getSupabase();
  if (!sb) return { ok: false, reason: "not-configured" };
  try {
    const { error } = await sb.from("leads").insert({
      name: lead.name,
      email: lead.email,
      company: lead.company || null,
      reason: lead.reason || null,
      message: lead.message,
      source: "web",
    });
    if (error) return { ok: false, reason: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : "error" };
  }
}
