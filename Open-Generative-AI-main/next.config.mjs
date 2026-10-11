
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: [
    'studio',
    'ai-agent',
    'workflow-builder',
    'design-agent',
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
