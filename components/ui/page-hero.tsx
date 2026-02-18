import Image from "next/image";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
    imageAlt: string;
    heightClassName?: string;
    overlayClassName?: string;
    priority?: boolean;
}

export function PageHero({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    heightClassName = "min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]",
    overlayClassName = "bg-black/55",
    priority = false,
}: PageHeroProps) {
    return (
        <section className={`relative overflow-hidden ${heightClassName}`}>
            <div className="absolute inset-0">
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority={priority} />
                <div className={`absolute inset-0 ${overlayClassName}`} />
            </div>

            <Container className="relative z-10">
                <div className={`flex ${heightClassName} items-end py-10 sm:py-12 lg:py-16`}>
                    <div className="max-w-2xl">
                        <AnimateOnScroll animation="fade-in-up">
                            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                {title}
                            </h1>
                        </AnimateOnScroll>

                        {subtitle ? (
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                                    {subtitle}
                                </p>
                            </AnimateOnScroll>
                        ) : null}
                    </div>
                </div>
            </Container>
        </section>
    );
}
