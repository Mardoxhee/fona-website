import Image from "next/image";
import Link from "next/link";
import { Article } from "./article-card";

interface FeaturedArticleProps {
    article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
    return (
        <Link href={`/actualites/${article.slug}`} className="group relative block overflow-hidden">
            <div className="relative h-[350px] lg:h-[420px]">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl font-bold text-white transition-colors group-hover:text-primary-300 lg:text-3xl">
                    {article.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-300">{article.date}</p>
            </div>
        </Link>
    );
}
