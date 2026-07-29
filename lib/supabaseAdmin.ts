import "server-only";
import { createClient } from "@supabase/supabase-js";

// Service-role key bypasses RLS — this file must never be imported by
// a "use client" component. It's only used inside API routes / server code.
export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars."
    );
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export const STORAGE_BUCKET = "landing-images";
export const IMAGES_TABLE = "site_images";
