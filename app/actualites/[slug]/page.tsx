import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { NewsArticleHeader } from "@/components/home/news-article-header";
import { NewsArticleDetail } from "@/components/home/news-article-detail";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { NewsGridCard } from "@/components/home/news-grid-card";
import { getMoreNewsArticlesApi, getNewsArticleBySlugApi } from "@/lib/news";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

function buildDescription(article: Awaited<ReturnType<typeof getNewsArticleBySlugApi>>) {
    if (!article) return siteConfig.description;

    for (const block of article.content ?? []) {
        if (block.type === "p" && block.text?.trim()) return block.text.trim().slice(0, 180);
        if (block.type === "highlight" && block.text?.trim()) return block.text.trim().slice(0, 180);
    }

    return siteConfig.description;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = await getNewsArticleBySlugApi(slug);

    if (!article) {
        return {
            title: `Article introuvable | ${siteConfig.name}`,
            robots: { index: false, follow: false },
        };
    }

    const title = `${article.title} | ${siteConfig.name}`;
    const description = buildDescription(article);
    const url = new URL(`/actualites/${article.slug}`, siteConfig.url).toString();
    const image = new URL(`/actualites/${article.slug}/opengraph-image`, siteConfig.url).toString();

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: "fr_FR",
            type: "article",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export default async function ActualiteDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const article = await getNewsArticleBySlugApi(slug);

    if (!article) {
        notFound();
    }

    const moreNews = await getMoreNewsArticlesApi(slug, 4);

    return (
        <>
            <section className="bg-white py-14 lg:py-20">
                <Container>
                    <AnimateOnScroll animation="fade-in-up">
                        <div className="mx-auto max-w-3xl">
                            <NewsArticleHeader
                                title={article.title}
                                author={article.author ?? "FONAREV"}
                                date={article.date}
                            />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-in-up" delay={120}>
                        <NewsArticleDetail article={article} />
                    </AnimateOnScroll>
                </Container>
            </section>

            <section className="bg-white pb-20 lg:pb-28">
                <Container>
                    <AnimateOnScroll animation="fade-in-up">
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">PLUS D&apos;ACTUALITÉS</p>
                    </AnimateOnScroll>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {moreNews.map((item, idx) => (
                            <AnimateOnScroll key={item.id} animation="fade-in-up" delay={100 + idx * 80}>
                                <NewsGridCard item={item} />
                            </AnimateOnScroll>
                        ))}
                    </div>

                    <div className="mt-8">
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <Link
                                href="/actualites"
                                className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-400"
                            >
                                Voir plus
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </AnimateOnScroll>
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
