import { IMAGES_TABLE } from "@/lib/supabaseAdmin";
import { supabasePublic } from "@/lib/supabasePublic";

export type ImageMap = Record<string, string>;

export async function getImageMap(): Promise<ImageMap> {
  // If Supabase env vars aren't set yet, fail soft — the site should still
  // render with placeholder photo slots rather than crash the build/request.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {};
  }

  try {
    const supabase = supabasePublic();
    const { data, error } = await supabase.from(IMAGES_TABLE).select("slot_key, url");
    if (error || !data) return {};
    return Object.fromEntries(data.map((row) => [row.slot_key, row.url]));
  } catch {
    return {};
  }
}
