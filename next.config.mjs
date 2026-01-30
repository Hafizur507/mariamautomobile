/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.carlogos.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "imgd.aeplcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.architecturaldigest.com",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
      },
    ],
  },
};

export default nextConfig;
// www.shutterstock.com;
