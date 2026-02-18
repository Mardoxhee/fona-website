"use client";

import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { NewsFeaturedSlider } from "@/components/home/news-featured-slider";
import { NewsMiniCard } from "@/components/home/news-mini-card";
import { NewsGridCard } from "@/components/home/news-grid-card";
import { NewsArchiveCard } from "@/components/home/news-archive-card";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import {
    getArchiveNews,
    getFeaturedNewsSlides,
    getGridNews,
    getRightColumnNews,
} from "@/lib/news";

export default function ActualitesPage() {
    const featuredSlides = getFeaturedNewsSlides(3);
    const rightColumnItems = getRightColumnNews(3);
    const fullGridItems = getGridNews(6);
    const archiveItems = getArchiveNews(6);

    return (
        <>
            <section className="bg-white py-14 lg:py-20">
                <Container>
                    <AnimateOnScroll animation="fade-in-up">
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-neutral-900 lg:text-5xl">Actualités</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-up" delay={120}>
                        <p className="mt-4 max-w-lg text-sm text-neutral-600">
                            Obtenez les derniers articles et informations sur les activités du FONAREV
                        </p>
                    </AnimateOnScroll>

                    <div className="mt-10 grid gap-6 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <AnimateOnScroll animation="fade-in-up" delay={150}>
                                <NewsFeaturedSlider slides={featuredSlides} imagePriority />
                            </AnimateOnScroll>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="space-y-5">
                                {rightColumnItems.map((item, idx) => (
                                    <AnimateOnScroll key={item.id} animation="fade-in-up" delay={200 + idx * 90}>
                                        <NewsMiniCard item={item} />
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-white pb-20 lg:pb-28">
                <Container>
                    <AnimateOnScroll animation="fade-in-up">
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">TOUTE L&apos;ACTUALITÉ</p>
                    </AnimateOnScroll>

                    <div className="mt-8 grid gap-6 lg:grid-cols-12">
                        <div className="lg:col-span-9">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {fullGridItems.map((item, idx) => (
                                    <AnimateOnScroll key={item.id} animation="fade-in-up" delay={100 + idx * 80}>
                                        <NewsGridCard item={item} />
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <div className="h-full min-h-[520px] bg-primary-500" />
                            </AnimateOnScroll>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-white pb-20 lg:pb-28">
                <Container>
                    <AnimateOnScroll animation="fade-in-up">
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">ARCHIVES</p>
                    </AnimateOnScroll>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        {archiveItems.map((item, idx) => (
                            <AnimateOnScroll key={item.id} animation="fade-in-up" delay={100 + idx * 70}>
                                <NewsArchiveCard item={item} />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </Container>
            </section>

            <NewsletterCta
                title="Restez informé sur nos activités"
                subtitle="Entrez votre email pour recevoir les derniers articles et campagnes sur les activités du FONAREV"
                placeholder="Email"
                buttonLabel="S’abonner"
                className="bg-neutral-50 py-20"
            />
        </>
    );
}