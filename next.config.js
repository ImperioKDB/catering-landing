/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows next/image to load photos uploaded via /admin, which are
    // served from Supabase Storage's public URL for your project.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
