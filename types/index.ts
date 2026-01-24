// Types globaux de l'application

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
}

export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
    label?: string;
}

export interface NavConfig {
    mainNav: NavItem[];
    footerNav: NavItem[];
}

export interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface LayoutProps {
    children: React.ReactNode;
    params?: Promise<{ [key: string]: string }>;
}
