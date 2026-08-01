/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript ስህተት ቢኖርም build እንዲያደርግ ይፈቅዳል
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint ስህተት ቢኖርም build እንዲያደርግ ይፈቅዳል
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;