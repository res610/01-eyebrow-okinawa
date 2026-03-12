'use client';

import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';
import { VOICE_IMAGES_COUNT, EAGER_LOADING_COUNT } from '@/constants';

const voiceImages = Array.from({ length: VOICE_IMAGES_COUNT }, (_, i) => ({
    src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/voices/voice-${String(i + 1).padStart(2, '0')}.webp`,
    alt: `お客様の声 ${i + 1}`,
}));

export default function CustomerVoices() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goToPrev = useCallback(() => {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : voiceImages.length - 1));
    }, []);

    const goToNext = useCallback(() => {
        setLightboxIndex((prev) => (prev !== null && prev < voiceImages.length - 1 ? prev + 1 : 0));
    }, []);

    // キーボード操作（ライトボックス）
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'ArrowRight') goToNext();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightboxIndex, goToPrev, goToNext]);

    // スクロール位置からアクティブなカードを検出
    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollCenter = container.scrollLeft + container.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        Array.from(container.children).forEach((child, i) => {
            const el = child as HTMLElement;
            const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - scrollCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closest = i;
            }
        });
        setCurrentIndex(closest);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // ドットクリックで指定カードへスクロール
    const scrollToIndex = useCallback((index: number) => {
        if (!scrollRef.current) return;
        const cards = Array.from(scrollRef.current.children) as HTMLElement[];
        if (!cards[index]) return;
        const container = scrollRef.current;
        const card = cards[index];
        const scrollLeft = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }, []);

    return (
        <>
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* タイトル */}
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-2 text-brand">お客様の声</h2>
                        <div className="w-48 h-0.5 bg-brand mx-auto mb-2"></div>
                        <p className="text-sm tracking-widest text-brand-light">CUSTOMER VOICE</p>
                    </div>

                    {/* リード文 */}
                    <p className="text-center text-sm md:text-base text-gray-500 leading-relaxed mb-8">
                        多くのお客様から<br className="md:hidden" />喜びの声をいただいています
                    </p>

                    {/* カルーセル SP: 全幅、PC: 中央寄せ600px */}
                    <div className="relative -mx-4 overflow-hidden md:mx-auto md:max-w-[600px]">
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                            {voiceImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => openLightbox(index)}
                                    className="flex-shrink-0 snap-center aspect-[3/2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100
                                        w-[80vw] first:ml-[10vw] last:mr-[10vw]
                                        md:w-[500px] md:first:ml-[50px] md:last:mr-[50px]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={333}
                                        className="w-full h-full object-contain"
                                        loading={index < EAGER_LOADING_COUNT ? 'eager' : 'lazy'}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ドット（SP・PC共通） */}
                    <div className="flex justify-center gap-1.5 mt-4">
                        {voiceImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? 'w-5 bg-brand' : 'w-1.5 bg-gray-300'
                                }`}
                                aria-label={`${i + 1}枚目`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ライトボックス */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* 閉じるボタン */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                        aria-label="閉じる"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* カウンター */}
                    <div className="absolute top-4 left-4 text-white/70 text-sm">
                        {lightboxIndex + 1} / {voiceImages.length}
                    </div>

                    {/* 前へボタン */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                        aria-label="前の画像"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* 画像 */}
                    <div
                        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={voiceImages[lightboxIndex].src}
                            alt={voiceImages[lightboxIndex].alt}
                            width={600}
                            height={800}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        />
                    </div>

                    {/* 次へボタン */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                        aria-label="次の画像"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
