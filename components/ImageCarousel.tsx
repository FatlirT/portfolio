'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
    images: string[];
    interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const autoScroll = setInterval(() => {
            nextImage();
        }, interval);

        return () => clearInterval(autoScroll);
    }, [currentIndex, interval]);

    const nextImage = (): void => {
        if (images.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (): void => {
        if (images.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative overflow-hidden w-full max-w-3xl h-72 mx-auto rounded-3xl border-2 border-light-acc/35 bg-black/5 shadow-[inset_0_0px_20px_rgba(0,0,0,0.2)]">
            <div className="flex relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            priority={index === currentIndex} // Optionally prioritize the current image
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-light-acc bg-opacity-50 text-white p-2 rounded-full z-10 text-center w-11"
                onClick={prevImage}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-light-acc bg-opacity-50 text-white p-2 rounded-full z-10 text-center w-11"
                onClick={nextImage}
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageCarousel;
