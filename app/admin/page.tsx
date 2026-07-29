import { imageSlots } from "@/lib/imageSlots";
import { getImageMap } from "@/lib/images";
import { AdminImageManager } from "@/components/admin/AdminImageManager";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const images = await getImageMap();

  return (
    <div className="min-h-screen bg-cream py-10">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold text-espresso-dark">Photo Manager</h1>
            <p className="mt-1 font-body text-xs text-espresso/60">
              Upload a photo for each slot below. Changes appear on the live site within a minute — no redeploy needed.
            </p>
          </div>
          <LogoutButton />
        </div>

        <AdminImageManager slots={imageSlots} initialImages={images} />
      </div>
    </div>
  );
}
