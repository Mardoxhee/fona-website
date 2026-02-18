import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { NewsArticleHeader } from "@/components/home/news-article-header";
import { NewsArticleDetail } from "@/components/home/news-article-detail";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { NewsGridCard } from "@/components/home/news-grid-card";
import { getMoreNewsArticles, getNewsArticleBySlug } from "@/lib/news";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ActualiteDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const article = getNewsArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const moreNews = getMoreNewsArticles(slug, 4);

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
