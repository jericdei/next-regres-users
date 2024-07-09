/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reqres.in",
        pathname: "/img/faces/**",
      },
    ],
  },
};

module.exports = nextConfig;
