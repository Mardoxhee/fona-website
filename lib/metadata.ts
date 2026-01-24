import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataProps {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
}

export function generateMetadata({
    title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
    const metaTitle = title
        ? `${title} | ${siteConfig.name}`
        : siteConfig.name;

    return {
        title: metaTitle,
        description,
        openGraph: {
            title: metaTitle,
            description,
            url: siteConfig.url,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: metaTitle,
                },
            ],
            locale: "fr_FR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description,
            images: [image],
            creator: "@fonarev",
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: siteConfig.url,
        },
    };
}

export const baseMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "FONAREV",
        "fonds de réparation",
        "victimes violences sexuelles",
        "RDC",
        "République Démocratique du Congo",
        "conflits armés",
        "réparation victimes",
        "justice",
        "droits humains",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@fonarev",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
};
