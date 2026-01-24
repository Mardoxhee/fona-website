import Image from "next/image";
import Link from "next/link";

export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    image: string;
    date: string;
    author?: string;
}

interface ArticleCardProps {
    article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link href={`/actualites/${article.slug}`} className="group block">
            <div className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
            <div className="mt-4">
                <h3 className="font-heading text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600">
                    {article.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-sm text-neutral-500">
                    <span>{article.date}</span>
                </div>
            </div>
        </Link>
    );
}
