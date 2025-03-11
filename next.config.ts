import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.imgur.com',
            },
            {
                hostname: 'img-cdn.tnwcdn.com',
            },
        ],
    },
};

export default nextConfig;
