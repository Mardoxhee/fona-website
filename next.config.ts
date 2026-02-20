import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "360.fonasite.app",
      },
      {
        protocol: "https",
        hostname: "minio2.fonasite.app",
      },
      {
        protocol: "https",
        hostname: "minio.360.fonasite.app",
        port: "5518",
      },
    ],
  },
};

export default nextConfig;
