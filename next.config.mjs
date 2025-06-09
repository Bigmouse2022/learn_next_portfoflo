/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/(.*)", // 覆盖所有API路由
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://learn-next-portfoflo.vercel.app",
          },
          { key: "Access-Control-Allow-Methods", value: "POST" },
        ],
      },
    ];
  },
};

export default nextConfig;
