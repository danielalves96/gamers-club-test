/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/player/lizzy',
        permanent: true,
      },
    ]
  },
};
