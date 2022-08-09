/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://awakewake.jp/tool/team-divider/wakewake",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
