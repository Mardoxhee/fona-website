import Image from "next/image";
import { Quote } from "lucide-react";
import type { NewsArticle, NewsContentBlock } from "@/lib/news";

type NewsArticleDetailProps = {
    article: NewsArticle;
    className?: string;
};

function ArticleBlock({ block }: { block: NewsContentBlock }) {
    if (block.type === "p") {
        return <p className="text-sm leading-7 text-neutral-700">{block.text}</p>;
    }

    if (block.type === "image") {
        return (
            <div className="my-10">
                <div className="relative h-[260px] w-full overflow-hidden bg-neutral-100 sm:h-[320px]">
                    <Image src={block.src} alt={block.alt} fill className="object-cover" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative my-10 overflow-hidden border border-primary-200 bg-primary-500/10 p-6">
            <Quote className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 text-primary-500/15" />
            <p className="relative text-sm leading-7 text-primary-900 underline decoration-primary-500/30 underline-offset-4">
                {block.text}
            </p>
        </div>
    );
}

export function NewsArticleDetail({ article, className }: NewsArticleDetailProps) {
    return (
        <article className={className}>
            <div className="mt-10">
                <div className="relative h-[420px] w-full overflow-hidden bg-neutral-100 lg:h-[520px]">
                    <Image
                        src={article.coverImage ?? article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-8">
                {article.content.map((block, idx) => (
                    <ArticleBlock key={idx} block={block} />
                ))}
            </div>
        </article>
    );
}
