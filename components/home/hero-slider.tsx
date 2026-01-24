"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const slides = [
    {
        id: 1,
        title: "Nous luttons pour l'identification des victimes",
        description:
            "Nous avons commencé l'identification des victimes de violences sexuelles liées aux conflits dans plusieurs provinces de la République Démocratique du Congo, notamment au Kasaï, Bas-Congo et Goma. Notre mission est de recenser et accompagner chaque victime dans son parcours de réparation.",
        image: "/identification2.jpg",
        stats: [
            { value: "1000+", label: "Victimes dans les ménages ordinaires" },
            { value: "1200+", label: "Victimes dans les ménages collectifs" },
            { value: "3000+", label: "Victimes en urgences médicales" },
            { value: "3000+", label: "Victimes détenant des décisions de justice" },
        ],
    },
    {
        id: 2,
        title: "Nous allouons des réparations aux victimes",
        description:
            "Le FONAREV assure la prise en charge globale des victimes à travers des programmes de réparation incluant l'assistance médicale, psychologique et les indemnisations. Nous accompagnons chaque survivante vers la reconstruction et la dignité.",
        image: "/valeur.jpg",
        stats: [
            { value: "2.5k+", label: "Prises en charge médicales urgentes" },
            { value: "1.8k+", label: "Victimes indemnisées" },
            { value: "500+", label: "Accompagnements psychologiques" },
            { value: "350+", label: "Réinsertions économiques" },
        ],
    },
    {
        id: 3,
        title: "Nous aidons les victimes à avoir accès à la Justice",
        description:
            "Le FONAREV soutient les victimes dans leurs démarches judiciaires en appuyant les audiences foraines et en facilitant l'accès aux tribunaux. Nous œuvrons pour que chaque victime obtienne justice et reconnaissance de ses droits.",
        image: "/audience.jpeg",
        stats: [
            { value: "45+", label: "Audiences foraines appuyées" },
            { value: "1.2k+", label: "Victimes représentées en justice" },
            { value: "320+", label: "Décisions de justice obtenues" },
            { value: "85+", label: "Avocats partenaires mobilisés" },
        ],
    },
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, [isAnimating]);

    const slide = slides[currentSlide];

    return (
        <section className="relative min-h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            {/* Content */}
            <Container className="relative z-10">
                <div className="flex min-h-[600px] items-center py-16 lg:py-24">
                    <div className="max-w-2xl">
                        <h1
                            key={`title-${slide.id}`}
                            className="animate-fade-in-up font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            {slide.title}
                        </h1>
                        <p
                            key={`desc-${slide.id}`}
                            className="animate-fade-in-up animation-delay-200 mt-4 text-sm leading-relaxed text-neutral-200"
                        >
                            {slide.description}
                        </p>
                        <div className="animate-fade-in-up animation-delay-400 mt-8">
                            <Button className="cursor-pointer rounded-md bg-primary-500 px-8 py-3 font-heading font-semibold hover:bg-primary-600">
                                Nous contacter
                            </Button>
                        </div>

                        {/* Statistics */}
                        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4">
                            {slide.stats.map((stat, index) => (
                                <div
                                    key={`stat-${slide.id}-${index}`}
                                    className={`animate-fade-in-up animation-delay-${500 + index * 100}`}
                                >
                                    <p className="font-heading text-3xl font-bold text-primary-400">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-sm text-neutral-300">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Navigation Arrows */}
            <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
                <button
                    onClick={prevSlide}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    aria-label="Slide précédente"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    aria-label="Slide suivante"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 cursor-pointer rounded-full transition-all ${index === currentSlide
                            ? "w-8 bg-primary-500"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Aller à la slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
