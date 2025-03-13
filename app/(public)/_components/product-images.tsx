'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesProps {
    name: string;
    imagesUrl: string[];
}

const ProductImages = ({ imagesUrl, name }: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState<string>(imagesUrl[0]);

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl);
    };
    return (
        <div className="relative flex h-full w-full flex-col gap-2 lg:gap-4">
            <div className="flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl md:h-auto">
                <Image
                    src={currentImage}
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    priority
                    className="h-full max-h-[100%] min-h-[350px] w-dvw min-w-[300px] object-cover md:max-w-[100%]"
                />
            </div>
            <div className="mt-8 flex flex-row justify-between rounded-none px-5">
                {imagesUrl.map((imageUrl, i) => (
                    <button
                        key={i}
                        className={`flex h-[80px] cursor-pointer items-center justify-center overflow-hidden rounded-lg grayscale transition-all duration-300 hover:grayscale-0 lg:h-[90px] lg:w-[100px] ${currentImage === imageUrl && 'border-primary cursor-pointer border-1 border-solid grayscale-0'}`}
                        onClick={() => handleImageClick(imageUrl)}
                    >
                        <Image
                            src={imageUrl}
                            alt={name}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-full max-h-[100%] w-full max-w-[100%] object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
