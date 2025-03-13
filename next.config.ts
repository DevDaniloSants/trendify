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
            {
                hostname: 'pravatar.cc',
            },
            {
                hostname: 'static.vecteezy.com',
            },
            {
                hostname: 'picsum.photos',
            },
            {
                hostname: 'placehold.co',
            },
            {
                hostname: 'media.istockphoto.com',
            },
            {
                hostname: 'images.unsplash.com',
            },
            {
                hostname: 'okdiario.com',
            },
            {
                hostname: 'www.google.com',
            },
            {
                hostname: 'i5.cloudfable.net',
            },
            {
                hostname: 'prpop.org',
            },
            {
                hostname: 'goo.su',
            },
            {
                hostname: 'products.com',
            },
            {
                hostname: 'placeimg.com',
            },
            {
                hostname: 'vietmartjp.com',
            },
            {
                hostname: 'example.com',
            },
            {
                hostname: 'encrypted-tbn0.gstatic.com',
            },
        ],
    },
};

export default nextConfig;
