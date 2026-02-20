"use client";

import { FeaturedArticle } from "@/components/home/featured-article";
import { ArticleCard, type Article } from "@/components/home/article-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import type { NewsItem } from "@/components/home/news-types";

type HomeLatestNewsProps = {
    items: NewsItem[];
};

function newsItemToArticle(item: NewsItem): Article {
    return {
        id: item.id,
        title: item.title,
        slug: item.slug,
        image: item.image,
        date: item.date,
    };
}

export function HomeLatestNews({ items }: HomeLatestNewsProps) {
    const articles = items.map(newsItemToArticle);
    const featured = articles[0];
    const recents = articles.slice(1, 4);

    return (
        <div className="mt-10">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
                {featured ? <FeaturedArticle article={featured} /> : null}
            </AnimateOnScroll>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
                {recents.map((article, index) => (
                    <AnimateOnScroll key={article.id} animation="fade-in-up" delay={200 + index * 100}>
                        <ArticleCard article={article} />
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
    );
}
