import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, STORAGE_BUCKET, IMAGES_TABLE } from "@/lib/supabaseAdmin";
import { imageSlots } from "@/lib/imageSlots";

const MAX_BYTES = 8 * 1024 * 1024; // 8MB — plenty for a compressed phone photo
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  const slotKey = formData.get("slotKey");

  if (!(file instanceof File) || typeof slotKey !== "string") {
    return NextResponse.json({ error: "Missing file or slotKey." }, { status: 400 });
  }

  if (!imageSlots.some((s) => s.key === slotKey)) {
    return NextResponse.json({ error: `Unknown slotKey: ${slotKey}` }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Only JPG, PNG, or WEBP images are allowed. Convert HEIC before uploading." },
      { status: 400 }
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File is too large — keep it under 8MB." }, { status: 400 });
  }

  const supabase = supabaseAdmin();
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${slotKey}-${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });

  if (uploadError) {
    return NextResponse.json({ error: `Upload failed: ${uploadError.message}` }, { status: 500 });
  }

  const { data: publicUrlData } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  const url = publicUrlData.publicUrl;

  const { error: dbError } = await supabase
    .from(IMAGES_TABLE)
    .upsert({ slot_key: slotKey, url, updated_at: new Date().toISOString() }, { onConflict: "slot_key" });

  if (dbError) {
    return NextResponse.json({ error: `Uploaded but failed to save reference: ${dbError.message}` }, { status: 500 });
  }

  return NextResponse.json({ ok: true, slotKey, url });
}
