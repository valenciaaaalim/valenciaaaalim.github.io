/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // <-- add
  images: { unoptimized: true },    // keep for Pages
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
export default nextConfig
