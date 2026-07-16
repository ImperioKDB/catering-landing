/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: once real photos are hosted (e.g. Supabase storage, Cloudinary, or /public),
    // add the domain here. Using unoptimized local placeholders for now.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
