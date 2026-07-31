import { IMAGES_TABLE } from "@/lib/supabaseAdmin";
import { supabasePublic } from "@/lib/supabasePublic";

export type ImageMap = Record<string, string>;

export async function getImageMap(): Promise<ImageMap> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error("getImageMap: missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
    return {};
  }

  try {
    const supabase = supabasePublic();
    const { data, error } = await supabase.from(IMAGES_TABLE).select("slot_key, url");
    if (error) {
      console.error("getImageMap: Supabase query error:", error.message);
      return {};
    }
    if (!data) return {};
    return Object.fromEntries(data.map((row) => [row.slot_key, row.url]));
  } catch (e) {
    console.error("getImageMap: unexpected error:", e);
    return {};
  }
}
