import type { NewsItem } from "@/components/home/news-types";
import { formatDate, slugify } from "@/lib/utils";

export type NewsContentBlock =
    | { type: "p"; text: string }
    | { type: "image"; src: string; alt: string }
    | { type: "highlight"; text: string }
    | { type: "html"; html: string };

export type NewsArticle = NewsItem & {
    content: NewsContentBlock[];
    coverImage?: string;
};

const articles: NewsArticle[] = [
    {
        id: "featured-1",
        title: "Le FONAREV renforce les capacités à kananga pour les écosystèmes œuvrant dans l’accompagnement judiciaire des victimes",
        slug: "fonarev-renforce-capacites-kananga",
        image: "/identification.jpeg",
        coverImage: "/identification.jpeg",
        date: "11 ami 2025",
        author: "Fonarev",
        content: [
            {
                type: "p",
                text: "Du mardi 22 au 24 avril 2025, le Fonds national de réparation des victimes de violences sexuelles liées aux conflits et des victimes de crimes contre la paix et la sécurité de l’humanité (FONAREV) a organisé une formation à KANANGA. Cette formation était destinée aux membres des écosystèmes impliqués dans l’accompagnement judiciaire des victimes de violences sexuelles liées aux conflits et de crimes contre la paix et la sécurité de l’humanité.",
            },
            {
                type: "p",
                text: "Pendant trois jours, la salle polyvalente du complexe scolaire La Reconnaissance a accueilli plus de 60 participants, notamment des membres d’ONG locales, des représentants du système juridique militaire et civil, ainsi que des journalistes locaux. Cet événement marque une avancée significative dans la stratégie de renforcement des capacités locales au Kasaï-Central.",
            },
            {
                type: "p",
                text: "Officiellement lancée par Monsieur Pierrot MUTELA, ministre provincial de la Communication et Médias et porte-parole du Gouvernement provincial, la formation a souligné l’importance pour chaque participant de maîtriser les mécanismes d’accès à la justice, de recouvrement des dommages et intérêts, et de protection effective des victimes.",
            },
            {
                type: "p",
                text: "Le représentant du Premier Président de la Cour d’Appel du Kasaï-Central a salué cette initiative, évoquant l’importance d’une justice humaine et réparatrice pour restaurer la dignité des victimes. Il a réaffirmé l’engagement de la Cour à travailler en synergie avec tous les acteurs de terrain, dans une approche concertée et complémentaire.",
            },
            {
                type: "image",
                src: "/audience.jpeg",
                alt: "Photo de groupe",
            },
            {
                type: "highlight",
                text: "La formation était axée sur plusieurs modules, notamment les droits et devoirs des victimes, l’accompagnement des victimes et des services de terrain pour l’accompagnement juridique, les victimes : Monsieur Gutsen Masiala, directeur de l’accès à la justice au sein du Fonarev. La formation a porté également sur la mise en œuvre des mécanismes de prise en charge économique dans le suivi des cas victimes et la coordination des actions. La formation a été clôturée par un appel à la mobilisation et à l’appropriation des outils par les acteurs de terrain.",
            },
            {
                type: "p",
                text: "Au-delà des exposés théoriques, la formation a intégré des activités pratiques pour renforcer l’expérience des participants. Une descente sur le terrain a été organisée afin de confronter les notions abordées aux réalités du terrain, en rencontrant directement les victimes et en observant les mécanismes d’accompagnement en situation réelle.",
            },
            {
                type: "p",
                text: "À travers cette formation, le Fonarev confirme son engagement à renforcer les capacités des acteurs locaux, à améliorer l’accès à la justice et à garantir une réparation effective et humaine pour les victimes de violences sexuelles et de crimes contre l’humanité au Kasaï-Central.",
            },
        ],
    },
    {
        id: "rc-1",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "fonarev-rapporteuse-onu-deplaces-internes-1",
        image: "/audience.jpeg",
        coverImage: "/audience.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [
            {
                type: "p",
                text: "Le FONAREV a reçu la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes. Cette rencontre a permis d’échanger sur les priorités, les mécanismes de protection et les pistes de collaboration pour renforcer les actions en faveur des victimes.",
            },
        ],
    },
    {
        id: "rc-2",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "fonarev-rapporteuse-onu-deplaces-internes-2",
        image: "/identification2.jpg",
        coverImage: "/identification2.jpg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [
            {
                type: "p",
                text: "Rencontre de travail autour de la protection des personnes déplacées internes et de la coordination des initiatives de soutien. Le FONAREV réaffirme son engagement pour des actions fondées sur la dignité et la réparation.",
            },
        ],
    },
    {
        id: "rc-3",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "fonarev-rapporteuse-onu-deplaces-internes-3",
        image: "/identification.jpeg",
        coverImage: "/identification.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [
            {
                type: "p",
                text: "Dialogue institutionnel sur les droits des personnes déplacées internes et les leviers de protection. Le FONAREV présente ses programmes et les perspectives d’appui.",
            },
        ],
    },
    {
        id: "grid-1",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "fonarev-rapporteuse-onu-deplaces-internes-4",
        image: "/identification.jpeg",
        coverImage: "/identification.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Article en cours de rédaction." }],
    },
    {
        id: "grid-2",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "fonarev-rapporteuse-onu-deplaces-internes-5",
        image: "/audience.jpeg",
        coverImage: "/audience.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Article en cours de rédaction." }],
    },
    {
        id: "grid-3",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "fonarev-rapporteuse-onu-deplaces-internes-6",
        image: "/identification2.jpg",
        coverImage: "/identification2.jpg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Article en cours de rédaction." }],
    },
    {
        id: "arch-1",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "archives-rapporteuse-onu-1",
        image: "/audience.jpeg",
        coverImage: "/audience.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Archive." }],
    },
    {
        id: "arch-2",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "archives-rapporteuse-onu-2",
        image: "/identification.jpeg",
        coverImage: "/identification.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Archive." }],
    },
    {
        id: "arch-3",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "archives-rapporteuse-onu-3",
        image: "/identification2.jpg",
        coverImage: "/identification2.jpg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Archive." }],
    },
    {
        id: "arch-4",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "archives-rapporteuse-onu-4",
        image: "/genocst.jpg",
        coverImage: "/genocst.jpg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Archive." }],
    },
    {
        id: "arch-5",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "archives-rapporteuse-onu-5",
        image: "/audience.jpeg",
        coverImage: "/audience.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Archive." }],
    },
    {
        id: "arch-6",
        title: "Le FONAREV reçoit la Rapporteuse spéciale de l’ONU sur les droits des personnes déplacées internes",
        slug: "archives-rapporteuse-onu-6",
        image: "/identification.jpeg",
        coverImage: "/identification.jpeg",
        date: "26 Mai 2025",
        author: "FONAREV",
        content: [{ type: "p", text: "Archive." }],
    },
];

export function getAllNewsArticles(): NewsArticle[] {
    return articles;
}

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
    return articles.find((a) => a.slug === slug);
}

export function getMoreNewsArticles(currentSlug: string, count = 4): NewsItem[] {
    return articles
        .filter((a) => a.slug !== currentSlug)
        .slice(0, count)
        .map((a) => ({
            id: a.id,
            title: a.title,
            slug: a.slug,
            image: a.image,
            date: a.date,
            author: a.author,
        }));
}

export function getFeaturedNewsSlides(count = 3): NewsItem[] {
    return articles
        .slice(0, count)
        .map((a) => ({
            id: a.id,
            title: a.title,
            slug: a.slug,
            image: a.image,
            date: a.date,
            author: a.author,
        }));
}

export function getRightColumnNews(count = 3): NewsItem[] {
    return articles
        .filter((a) => a.id.startsWith("rc-"))
        .slice(0, count)
        .map((a) => ({
            id: a.id,
            title: a.title,
            slug: a.slug,
            image: a.image,
            date: a.date,
            author: a.author,
        }));
}

export function getArchiveNews(count = 6): NewsItem[] {
    return articles
        .filter((a) => a.id.startsWith("arch-"))
        .slice(0, count)
        .map((a) => ({
            id: a.id,
            title: a.title,
            slug: a.slug,
            image: a.image,
            date: a.date,
            author: a.author,
        }));
}

export function getGridNews(count = 6): NewsItem[] {
    return articles
        .filter((a) => a.id.startsWith("grid-") || a.id.startsWith("rc-"))
        .slice(0, count)
        .map((a) => ({
            id: a.id,
            title: a.title,
            slug: a.slug,
            image: a.image,
            date: a.date,
            author: a.author,
        }));
}

type ApiArticle = {
    status: boolean;
    isActived: boolean;
    _id: string;
    date: string;
    titre: string;
    thumbanails?: string;
    contenu?: string;
    type?: number;
    photos?: string[];
};

type ApiArticlesResponse = {
    status?: string;
    article?: ApiArticle[];
    articles?: ApiArticle[];
};

function buildArticleSlug(title: string, id: string) {
    const base = slugify(title || "article");
    return `${base}--${id}`;
}

function getArticleIdFromSlug(slug: string) {
    const parts = slug.split("--");
    return parts.length > 1 ? parts[parts.length - 1] : slug;
}

function apiArticleToNewsItem(a: ApiArticle): NewsItem {
    const thumb = (a.thumbanails ?? "").trim();
    return {
        id: a._id,
        title: a.titre,
        slug: buildArticleSlug(a.titre, a._id),
        image: thumb ? thumb : "/logo-fonarev.jpg",
        date: formatDate(a.date),
        author: "FONAREV",
    };
}

async function getFileLink(file: string): Promise<string | undefined> {
    const baseUrl = process.env.NEXT_PUBLIC_FILE_URL ?? "https://minio2.fonasite.app";
    const url = `${baseUrl.replace(/\/$/, "")}/minio/files/site/${encodeURIComponent(file)}`;

    const res = await fetch(url);
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

async function resolveApiThumbanails(thumbanails?: string): Promise<string | undefined> {
    const candidate = (thumbanails ?? "").trim();
    if (!candidate) return undefined;

    const isValidRemote = /^https?:\/\//i.test(candidate);
    const isValidLocal = candidate.startsWith("/");
    if (isValidRemote || isValidLocal) return candidate;

    try {
        return await getFileLink(candidate);
    } catch {
        return undefined;
    }
}

function apiArticleToNewsArticle(a: ApiArticle): NewsArticle {
    const contentText = (a.contenu ?? "").trim();
    const hasHtmlTags = /<\s*\/?\s*(p|br|div|span|strong|em|ul|ol|li|h1|h2|h3|h4|h5|h6|img)\b/i.test(contentText);
    const contentBlocks: NewsContentBlock[] = hasHtmlTags
        ? [{ type: "html", html: contentText.length ? contentText : "<p>Article en cours de rédaction.</p>" }]
        : (contentText.length
            ? contentText
                .split(/\n\s*\n/)
                .map((p) => p.replace(/\s+/g, " ").trim())
                .filter(Boolean)
                .map((text) => ({ type: "p" as const, text }))
            : [{ type: "p", text: "Article en cours de rédaction." }]);

    const imageCandidate = (a.thumbanails ?? "").trim();
    const isValidRemote = /^https?:\/\//i.test(imageCandidate);
    const isValidLocal = imageCandidate.startsWith("/");
    const safeCover = imageCandidate && (isValidRemote || isValidLocal) ? imageCandidate : undefined;

    return {
        ...apiArticleToNewsItem(a),
        coverImage: safeCover,
        content: contentBlocks,
    };
}

async function fetchApiArticles(): Promise<ApiArticle[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
    }

    const res = await fetch(`${baseUrl}/articles`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch articles: ${res.status}`);
    }

    const data = (await res.json()) as ApiArticlesResponse;

    const articles = Array.isArray(data.articles) ? data.articles : Array.isArray(data.article) ? data.article : [];
    return [...articles].sort((a, b) => {
        const aTime = Date.parse(a.date ?? "");
        const bTime = Date.parse(b.date ?? "");
        return (Number.isFinite(bTime) ? bTime : 0) - (Number.isFinite(aTime) ? aTime : 0);
    });
}

async function fetchApiLastArticles(): Promise<ApiArticle[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
    }

    const res = await fetch(`${baseUrl}/articles/last`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch last articles: ${res.status}`);
    }

    const data = (await res.json()) as unknown;
    if (data && typeof data === "object") {
        const articles = (data as ApiArticlesResponse).articles;
        if (Array.isArray(articles)) {
            return articles;
        }

        const article = (data as ApiArticlesResponse).article;
        if (Array.isArray(article)) {
            return article;
        }
    }

    return Array.isArray(data) ? (data as ApiArticle[]) : [];
}

export async function getLastNewsApi(count = 4): Promise<NewsItem[]> {
    try {
        const apiArticles = await fetchApiLastArticles();
        const picked = apiArticles.filter((a) => a.isActived).slice(0, count);
        const baseItems = picked.map(apiArticleToNewsItem);
        return await Promise.all(
            baseItems.map(async (item, idx) => {
                const src = await resolveApiThumbanails(picked[idx]?.thumbanails);
                return src ? { ...item, image: src } : item;
            }),
        );
    } catch {
        return getGridNews(count);
    }
}

export async function getFeaturedNewsSlidesApi(count = 3): Promise<NewsItem[]> {
    try {
        const apiArticles = await fetchApiArticles();
        const picked = apiArticles.filter((a) => a.isActived).slice(0, count);
        const baseItems = picked.map(apiArticleToNewsItem);
        return await Promise.all(
            baseItems.map(async (item, idx) => {
                const src = await resolveApiThumbanails(picked[idx]?.thumbanails);
                return src ? { ...item, image: src } : item;
            }),
        );
    } catch {
        return getFeaturedNewsSlides(count);
    }
}

export async function getRightColumnNewsApi(count = 3): Promise<NewsItem[]> {
    try {
        const apiArticles = await fetchApiArticles();
        const picked = apiArticles.filter((a) => a.isActived).slice(count, count * 2).slice(0, count);
        const baseItems = picked.map(apiArticleToNewsItem);
        return await Promise.all(
            baseItems.map(async (item, idx) => {
                const src = await resolveApiThumbanails(picked[idx]?.thumbanails);
                return src ? { ...item, image: src } : item;
            }),
        );
    } catch {
        return getRightColumnNews(count);
    }
}

export async function getGridNewsApi(count = 6): Promise<NewsItem[]> {
    try {
        const apiArticles = await fetchApiArticles();
        const picked = apiArticles.filter((a) => a.isActived).slice(0, count);
        const baseItems = picked.map(apiArticleToNewsItem);
        return await Promise.all(
            baseItems.map(async (item, idx) => {
                const src = await resolveApiThumbanails(picked[idx]?.thumbanails);
                return src ? { ...item, image: src } : item;
            }),
        );
    } catch {
        return getGridNews(count);
    }
}

export async function getArchiveNewsApi(count = 6): Promise<NewsItem[]> {
    try {
        const apiArticles = await fetchApiArticles();
        const active = apiArticles.filter((a) => a.isActived);
        const picked = active.slice(Math.max(0, active.length - count));
        const baseItems = picked.map(apiArticleToNewsItem);
        return await Promise.all(
            baseItems.map(async (item, idx) => {
                const src = await resolveApiThumbanails(picked[idx]?.thumbanails);
                return src ? { ...item, image: src } : item;
            }),
        );
    } catch {
        return getArchiveNews(count);
    }
}

export async function getNewsArticleBySlugApi(slug: string): Promise<NewsArticle | undefined> {
    try {
        const apiArticles = await fetchApiArticles();
        const id = getArticleIdFromSlug(slug);
        const found = apiArticles.find((a) => a._id === id);

        if (!found) return undefined;

        const base = apiArticleToNewsArticle(found);
        const resolved = await resolveApiThumbanails(found.thumbanails);
        return resolved ? { ...base, coverImage: resolved, image: resolved } : base;
    } catch {
        return getNewsArticleBySlug(slug);
    }
}

export async function getMoreNewsArticlesApi(currentSlug: string, count = 4): Promise<NewsItem[]> {
    try {
        const apiArticles = await fetchApiArticles();
        const currentId = getArticleIdFromSlug(currentSlug);
        const picked = apiArticles
            .filter((a) => a.isActived)
            .filter((a) => a._id !== currentId)
            .slice(0, count);

        const baseItems = picked.map(apiArticleToNewsItem);
        return await Promise.all(
            baseItems.map(async (item, idx) => {
                const src = await resolveApiThumbanails(picked[idx]?.thumbanails);
                return src ? { ...item, image: src } : item;
            }),
        );
    } catch {
        return getMoreNewsArticles(currentSlug, count);
    }
}
