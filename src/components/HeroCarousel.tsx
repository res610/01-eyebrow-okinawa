'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ImageModal from '@/components/ImageModal';
import { HERO_SLIDE_INTERVAL_MS } from '@/constants';

const SLIDE_COUNT = 2;
const SWIPE_THRESHOLD = 50;

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const touchStartX = useRef(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

    const goTo = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const goNext = useCallback(() => {
        goTo((current + 1) % SLIDE_COUNT);
    }, [current, goTo]);

    const goPrev = useCallback(() => {
        goTo((current - 1 + SLIDE_COUNT) % SLIDE_COUNT);
    }, [current, goTo]);

    // 自動スライド
    useEffect(() => {
        intervalRef.current = setInterval(goNext, HERO_SLIDE_INTERVAL_MS);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [goNext]);

    // スワイプ操作
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            if (diff > 0) goNext();
            else goPrev();
        }
    }, [goNext, goPrev]);

    return (
        <section
            role="region"
            aria-roledescription="carousel"
            aria-label="ヒーローセクション"
            className="relative bg-gradient-to-b from-gray-50 to-white"
        >
            {/* スライドコンテナ */}
            <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {/* スライド1: サロン雰囲気動画 */}
                    <div
                        className="w-full flex-shrink-0 h-[calc(100svh-4rem)]"
                        aria-label="スライド 1 / 2"
                    >
                        <div className="relative w-full h-full py-8 md:py-12">
                            <div className="relative w-full h-full rounded-lg overflow-hidden mx-auto max-w-6xl">
                                <video
                                    src={`${basePath}/videos/salon-atmosphere.mp4`}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-white/75" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-brand px-4">
                                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                                            01（O-ONE）
                                        </p>
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide mb-3 md:mb-4">
                                            EYEBROW STYLING<br />FOR MEN OKINAWA
                                        </h1>
                                        <p className="text-sm sm:text-base md:text-lg tracking-wider">
                                            沖縄県那覇市おもろまち
                                        </p>
                                        <p className="text-sm sm:text-base md:text-lg tracking-wider">
                                            メンズ専門眉毛ワックスサロン
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* スライド2: 初回限定トライアル */}
                    <div
                        className="w-full flex-shrink-0 h-[calc(100svh-4rem)]"
                        aria-label="スライド 2 / 2"
                    >
                        <div className="bg-gray-900 text-white h-full flex items-center justify-center">
                            <div className="max-w-xs md:max-w-sm mx-auto px-4">
                                <ImageModal
                                    src={`${basePath}/images/campaign-flyer.webp`}
                                    alt="01（O-ONE）初回限定トライアルキャンペーン：眉毛パーマ×毛穴洗浄 通常9,000円→初回8,000円、眉毛ワックス×毛穴洗浄 通常8,000円→初回7,000円。1,000円OFF"
                                    width={595}
                                    height={842}
                                    className="rounded-lg overflow-hidden shadow-lg block"
                                />
                                <div className="text-center mt-3 md:mt-6">
                                    <a
                                        href="https://tol-app.jp/s/ah63epbbc2ejsctgvpzm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-yellow-300 transition-colors min-h-[44px] w-full sm:w-auto text-center"
                                    >
                                        初回トライアルを予約する
                                    </a>
                                    <p className="text-xs text-gray-400 mt-3">※初めてご来店の方限定・毛穴ケア付きセットメニュー対象</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ドットインジケーター */}
            <div className="flex justify-center gap-2 pb-6">
                {Array.from({ length: SLIDE_COUNT }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`スライド${i + 1}へ移動`}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            i === current
                                ? 'bg-brand'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
