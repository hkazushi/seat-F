/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Vercel は確認用。PHP が動かないのでフォーム送信を止め、検索にも載せない
    NEXT_PUBLIC_REVIEW: process.env.NEXT_PUBLIC_REVIEW ?? (process.env.VERCEL ? '1' : ''),
  },
};

export default nextConfig;
