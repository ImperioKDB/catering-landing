"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Something went wrong.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-5">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl bg-ivory p-8 shadow-lg">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
            <Lock className="h-5 w-5" />
          </span>
          <h1 className="font-display text-xl font-semibold text-espresso-dark">Admin Access</h1>
          <p className="mt-1 font-body text-xs text-espresso/60">Photo management for the landing page</p>
        </div>

        <label className="mb-1.5 block font-body text-xs font-semibold text-espresso/70">Password</label>
        <input
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus-ring w-full rounded-lg border border-espresso/15 bg-cream px-4 py-2.5 font-body text-sm"
        />

        {error && <p className="mt-3 font-body text-xs text-burgundy">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="focus-ring mt-5 w-full rounded-full bg-burgundy px-6 py-3 font-body text-sm font-semibold text-ivory transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Checking..." : "Enter"}
        </button>
      </form>
    </div>
  );
}
