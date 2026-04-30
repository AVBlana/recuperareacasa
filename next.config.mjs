/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["styled-components"],
  compiler: { styledComponents: true },
  images: {
    domains: ["www.soimiisanatatii.ro", "www.firmadeaur.ro"],
  },
  // experimental: {
  //   forceSwcTransforms: true,
  //   swcPlugins: [
  //     ["@swc/plugin-styled-components", { displayName: true, ssr: true }],
  //   ],
  // },
};

export default nextConfig;
