import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

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
    const src = (article.image || "/logo-fonarev.jpg").trim();
    const isLogo = src === "/logo-fonarev.jpg";

    return (
        <Link href={`/actualites/${article.slug}`} className="group block">
            <div className="overflow-hidden">
                <div className={isLogo ? "relative h-48 overflow-hidden bg-primary-600" : "relative h-48 overflow-hidden"}>
                    <Image
                        src={src}
                        alt={article.title}
                        fill
                        className={
                            isLogo
                                ? "object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                                : "object-cover transition-transform duration-500 group-hover:scale-105"
                        }
                    />
                </div>
            </div>
            <div className="mt-4">
                <h3 className="font-heading text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600">
                    {article.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-sm text-neutral-500">
                    <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                    </span>
                </div>
            </div>
        </Link>
    );
}
