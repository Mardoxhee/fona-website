"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "fade-in" | "scale-in";
    delay?: number;
    threshold?: number;
}

export function AnimateOnScroll({
    children,
    className = "",
    animation = "fade-in-up",
    delay = 0,
    threshold = 0.1,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const animationClasses = {
        "fade-in-up": "translate-y-8 opacity-0",
        "fade-in-left": "-translate-x-8 opacity-0",
        "fade-in-right": "translate-x-8 opacity-0",
        "fade-in": "opacity-0",
        "scale-in": "scale-95 opacity-0",
    };

    const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100";

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className} ${isVisible ? visibleClasses : animationClasses[animation]
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
