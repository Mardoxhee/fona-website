"use client";

import { useEffect, useState } from "react";
import { FeaturedArticle } from "@/components/home/featured-article";
import { ArticleCard, type Article } from "@/components/home/article-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

type NewsApiArticle = {
    _id: string;
    titre: string;
    date?: string;
    thumbanails?: string;
    isActived?: boolean;
};

type LastArticlesResponse = {
    article?: NewsApiArticle[];
    articles?: NewsApiArticle[];
};

function buildArticleSlug(title: string, id: string) {
    const base = (title || "article")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .trim();

    return `${base || "article"}--${id}`;
}

function formatDateInput(date?: string) {
    if (!date) return "";
    const d = new Date(date);
    return Number.isNaN(d.getTime()) ? String(date) : d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
}

async function getFileLink(file: string): Promise<string | undefined> {
    const baseUrl = process.env.NEXT_PUBLIC_FILE_URL ?? "https://minio2.fonasite.app";
    const url = `${baseUrl.replace(/\/$/, "")}/minio/files/site/${encodeURIComponent(file)}`;

    const res = await fetch(url, { method: "GET" });
    if (!res.ok) return undefined;

    const payload = (await res.json()) as unknown;
    if (!payload || typeof payload !== "object") return undefined;

    const p = payload as { src?: unknown; data?: unknown };
    if (typeof p.src === "string" && p.src.trim()) return p.src;

    if (typeof p.data === "string" && p.data.trim()) return p.data;

    if (p.data && typeof p.data === "object") {
        const d = p.data as { src?: unknown };
        if (typeof d.src === "string" && d.src.trim()) return d.src;
    }

    return undefined;
}

function apiToArticle(a: NewsApiArticle): Article {
    return {
        id: a._id,
        title: a.titre,
        slug: buildArticleSlug(a.titre, a._id),
        image: "/logo-fonarev.jpg",
        date: formatDateInput(a.date),
    };
}

export function HomeLatestNews() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!baseUrl) {
            setIsLoading(false);
            return;
        }

        const url = `${baseUrl.replace(/\/$/, "")}/articles/last`;

        const run = async () => {
            try {
                const res = await fetch(url, { method: "GET" });
                if (!res.ok) {
                    return;
                }

                const data = (await res.json()) as unknown;
                const rawArticles =
                    data && typeof data === "object" && Array.isArray((data as LastArticlesResponse).articles)
                        ? (data as LastArticlesResponse).articles!
                        : data && typeof data === "object" && Array.isArray((data as LastArticlesResponse).article)
                            ? (data as LastArticlesResponse).article!
                            : Array.isArray(data)
                                ? (data as NewsApiArticle[])
                                : [];

                const mapped = rawArticles
                    .filter((a) => a && (a.isActived ?? true))
                    .slice(0, 4)
                    .map(apiToArticle);

                const withImages = await Promise.all(
                    mapped.map(async (item, idx) => {
                        const a = rawArticles[idx];
                        const file = (a?.thumbanails ?? "").trim();
                        if (!file) return item;

                        try {
                            const src = await getFileLink(file);
                            return src ? { ...item, image: src } : item;
                        } catch {
                            return item;
                        }
                    }),
                );

                setArticles(withImages);
            } catch {
                // ignore
            } finally {
                setIsLoading(false);
            }
        };

        void run();
    }, []);

    const featured = articles[0];
    const recents = articles.slice(1, 4);

    return (
        <div className="mt-10">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
                {isLoading ? (
                    <div className="relative h-[350px] overflow-hidden bg-neutral-200 animate-pulse lg:h-[420px]" />
                ) : featured ? (
                    <FeaturedArticle article={featured} />
                ) : null}
            </AnimateOnScroll>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <AnimateOnScroll key={`sk-${index}`} animation="fade-in-up" delay={200 + index * 100}>
                            <div className="group block">
                                <div className="overflow-hidden">
                                    <div className="relative h-48 overflow-hidden bg-neutral-200 animate-pulse" />
                                </div>
                                <div className="mt-4">
                                    <div className="h-5 w-4/5 bg-neutral-200 animate-pulse" />
                                    <div className="mt-3 h-4 w-2/5 bg-neutral-200 animate-pulse" />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))
                    : recents.map((article, index) => (
                        <AnimateOnScroll key={article.id} animation="fade-in-up" delay={200 + index * 100}>
                            <ArticleCard article={article} />
                        </AnimateOnScroll>
                    ))}
            </div>
        </div>
    );
}
