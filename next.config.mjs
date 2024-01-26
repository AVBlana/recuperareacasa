/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["styled-components"],
  compiler: { styledComponents: true },
  // experimental: {
  //   forceSwcTransforms: true,
  //   swcPlugins: [
  //     ["@swc/plugin-styled-components", { displayName: true, ssr: true }],
  //   ],
  // },
};

export default nextConfig;
