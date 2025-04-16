/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // HTML出力モード
  basePath: "/okada_factory",
  trailingSlash: true, //url末尾に/をつける
  images: {
    unoptimized: true, //画像最適化を無視（SGでは不可）
  },
  assetPrefix: "/okada_factory",
  env: { BASE_PATH: "/okada_factory" },
}

export default nextConfig
