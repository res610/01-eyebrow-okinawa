'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export default function ImageModal({ src, alt, width, height, className }: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className={`cursor-pointer ${className ?? ''}`}
                aria-label={`${alt}を拡大表示`}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-full object-cover"
                />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-[101]"
                        aria-label="閉じる"
                    >
                        &times;
                    </button>
                    <div
                        className="relative max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={width * 2}
                            height={height * 2}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
