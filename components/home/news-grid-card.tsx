import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "./news-types";

type NewsGridCardProps = {
    item: NewsItem;
    className?: string;
};

export function NewsGridCard({ item, className }: NewsGridCardProps) {
    return (
        <Link
            href={`/actualites/${item.slug}`}
            className={className ?? "group block border border-neutral-200 bg-white transition-colors hover:border-neutral-300"}
        >
            <div className="relative h-40 overflow-hidden bg-neutral-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>
            <div className="p-5">
                <p className="font-heading text-sm font-bold leading-snug text-neutral-900">{item.title}</p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-neutral-500">
                    <span>Publié par le {item.author ?? "FONAREV"}</span>
                    <span>{item.date}</span>
                </div>
            </div>
        </Link>
    );
}
