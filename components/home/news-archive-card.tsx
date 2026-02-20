"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "./news-types";

type NewsArchiveCardProps = {
    item: NewsItem;
    className?: string;
};

export function NewsArchiveCard({ item, className }: NewsArchiveCardProps) {
    const initialSrc = useMemo(() => (item.image || "/logo-fonarev.jpg").trim(), [item.image]);
    const [src, setSrc] = useState(initialSrc);
    const isLogo = src === "/logo-fonarev.jpg";

    return (
        <Link
            href={`/actualites/${item.slug}`}
            className={
                className ??
                "group grid grid-cols-[160px_1fr] items-stretch border border-neutral-200 bg-white transition-colors hover:border-neutral-300"
            }
        >
            <div
                className={
                    isLogo
                        ? "relative h-full min-h-[120px] overflow-hidden bg-primary-600"
                        : "relative h-full min-h-[120px] overflow-hidden bg-neutral-100"
                }
            >
                <Image
                    src={src}
                    alt={item.title}
                    fill
                    onError={() => setSrc("/logo-fonarev.jpg")}
                    className={
                        isLogo
                            ? "object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                            : "object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    }
                />
            </div>

            <div className="flex flex-col justify-center p-6">
                <p className="font-heading text-sm font-bold leading-snug text-neutral-900">{item.title}</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-neutral-500">
                    <span>Publié par le {item.author ?? "FONAREV"}</span>
                    <span>{item.date}</span>
                </div>
            </div>
        </Link>
    );
}
