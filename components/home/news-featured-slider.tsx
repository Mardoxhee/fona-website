"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NewsItem } from "./news-types";

type NewsFeaturedSliderProps = {
    slides: NewsItem[];
    autoPlayIntervalMs?: number;
    className?: string;
    imageClassName?: string;
    imagePriority?: boolean;
};

export function NewsFeaturedSlider({
    slides,
    autoPlayIntervalMs = 6000,
    className,
    imageClassName,
    imagePriority = false,
}: NewsFeaturedSliderProps) {
    const TRANSITION_MS = 700;

    const [activeIndex, setActiveIndex] = useState(0);
    const [fromIndex, setFromIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [incomingVisible, setIncomingVisible] = useState(true);
    const incomingTimerRef = useRef<number | null>(null);

    const active = slides[activeIndex];
    const from = slides[fromIndex];

    const goTo = useCallback((nextIndex: number) => {
        if (slides.length <= 1) return;
        if (nextIndex === activeIndex) return;
        if (isTransitioning) return;

        if (incomingTimerRef.current) {
            window.clearTimeout(incomingTimerRef.current);
        }

        setFromIndex(activeIndex);
        setActiveIndex(nextIndex);
        setIsTransitioning(true);
        setIncomingVisible(false);

        incomingTimerRef.current = window.setTimeout(() => {
            setIncomingVisible(true);
        }, 30);
    }, [activeIndex, isTransitioning, slides.length]);

    useEffect(() => {
        if (slides.length <= 1) return;
        const id = window.setInterval(() => {
            goTo((activeIndex + 1) % slides.length);
        }, autoPlayIntervalMs);
        return () => window.clearInterval(id);
    }, [activeIndex, autoPlayIntervalMs, goTo, slides.length]);

    useEffect(() => {
        if (!isTransitioning) return;
        const id = window.setTimeout(() => {
            setIsTransitioning(false);
            setFromIndex(activeIndex);
            setIncomingVisible(true);
        }, TRANSITION_MS);
        return () => window.clearTimeout(id);
    }, [activeIndex, isTransitioning]);

    useEffect(() => {
        return () => {
            if (incomingTimerRef.current) {
                window.clearTimeout(incomingTimerRef.current);
            }
        };
    }, []);

    if (slides.length === 0) return null;

    return (
        <div className={className ?? "relative overflow-hidden bg-neutral-100"}>
            <div className="relative">
                <div className={imageClassName ?? "relative h-[420px] w-full lg:h-[520px]"}>
                    <Link
                        href={`/actualites/${from.slug}`}
                        className="group absolute inset-0 block"
                        style={{ pointerEvents: isTransitioning ? "none" : "auto" }}
                        aria-hidden={isTransitioning}
                        tabIndex={isTransitioning ? -1 : 0}
                    >
                        <Image
                            src={from.image}
                            alt={from.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            priority={imagePriority}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                            <p className="text-xs font-semibold text-white/75">{from.date}</p>
                            <h3 className="mt-3 max-w-xl font-heading text-2xl font-bold leading-tight text-white lg:text-3xl">
                                {from.title}
                            </h3>
                        </div>
                    </Link>

                    {isTransitioning && (
                        <Link
                            href={`/actualites/${active.slug}`}
                            className={`group absolute inset-0 block transition-opacity duration-700 ${incomingVisible ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Image
                                src={active.image}
                                alt={active.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                priority={imagePriority}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                                <p className="text-xs font-semibold text-white/75">{active.date}</p>
                                <h3 className="mt-3 max-w-xl font-heading text-2xl font-bold leading-tight text-white lg:text-3xl">
                                    {active.title}
                                </h3>
                            </div>
                        </Link>
                    )}
                </div>
            </div>

            {slides.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={() => goTo((activeIndex - 1 + slides.length) % slides.length)}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/90 p-2 text-neutral-900 shadow-sm transition-colors hover:bg-white"
                        aria-label="Précédent"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => goTo((activeIndex + 1) % slides.length)}
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/90 p-2 text-neutral-900 shadow-sm transition-colors hover:bg-white"
                        aria-label="Suivant"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-5 right-6 z-10 flex items-center gap-2">
                        {slides.map((s, idx) => (
                            <button
                                key={s.id}
                                type="button"
                                onClick={() => goTo(idx)}
                                className={
                                    idx === activeIndex
                                        ? "h-2.5 w-2.5 bg-white"
                                        : "h-2.5 w-2.5 bg-white/45 transition-colors hover:bg-white/70"
                                }
                                aria-label={`Aller à la diapositive ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
