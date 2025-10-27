// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // optional; the action also sets this
  // do NOT add basePath/assetPrefix here; the action injects them
}
export default nextConfig
