/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML in ./out, no Node server needed
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: { agentUpgrade: "security" },
  allowedDevOrigins: [
    "192.168.1.1",
    "192.168.1.2",
    "192.168.1.3",
    "192.168.1.4",
    "192.168.1.5",
    "192.168.1.5",
    "192.168.1.7",
    "192.168.1.8",
    "192.168.1.9",
  ],
};

export default nextConfig;
