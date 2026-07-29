"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="focus-ring rounded-full border border-espresso/20 px-4 py-2 font-body text-xs font-semibold text-espresso/70 hover:bg-espresso/5"
    >
      Log out
    </button>
  );
}
