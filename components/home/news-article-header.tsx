import Link from "next/link";
import { Facebook, Instagram, Linkedin, Music2, Twitter } from "lucide-react";

type NewsArticleHeaderProps = {
    title: string;
    author: string;
    date: string;
};

export function NewsArticleHeader({ title, author, date }: NewsArticleHeaderProps) {
    return (
        <header>
            <h1 className="max-w-4xl font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                {title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold text-neutral-600">
                <span>Publié par {author}</span>
                <span>{date}</span>
                <span className="text-neutral-500">Partager</span>

                <div className="flex items-center gap-3 text-neutral-900">
                    <Link href="#" aria-label="Partager sur LinkedIn" className="transition-colors hover:text-primary-600">
                        <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link href="#" aria-label="Partager sur X" className="transition-colors hover:text-primary-600">
                        <Twitter className="h-4 w-4" />
                    </Link>
                    <Link href="#" aria-label="Partager sur Instagram" className="transition-colors hover:text-primary-600">
                        <Instagram className="h-4 w-4" />
                    </Link>
                    <Link href="#" aria-label="Partager sur Facebook" className="transition-colors hover:text-primary-600">
                        <Facebook className="h-4 w-4" />
                    </Link>
                    <Link href="#" aria-label="Partager sur TikTok" className="transition-colors hover:text-primary-600">
                        <Music2 className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
