import { SiteConfig, NavConfig } from "@/types";

export const siteConfig: SiteConfig = {
    name: "FONAREV",
    description:
        "Fonds National des Réparations des Victimes des Violences Sexuelles liées aux Conflits et des Victimes des Crimes contre la Paix et la Sécurité de l'Humanité en République Démocratique du Congo.",
    url: "https://fonarev.cd",
    ogImage: "https://fonarev.cd/opengraph-image",
    links: {
        twitter: "https://twitter.com/fonarev",
        linkedin: "https://linkedin.com/company/fonarev",
    },
};

export const navConfig: NavConfig = {
    mainNav: [
        {
            title: "Accueil",
            href: "/",
        },
        {
            title: "Notre Mission",
            href: "/mission",
        },
        {
            title: "Programmes",
            href: "/programmes",
        },
        {
            title: "À propos",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
    footerNav: [
        {
            title: "Mentions légales",
            href: "/legal",
        },
        {
            title: "Politique de confidentialité",
            href: "/privacy",
        },
        {
            title: "CGU",
            href: "/terms",
        },
    ],
};
