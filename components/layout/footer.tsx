import Link from "next/link";
import Image from "next/image";
import { siteConfig, navConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white">
            {/* Main Footer */}
            <Container>
                <div className="py-16">
                    <div className="grid gap-12 lg:grid-cols-4">
                        {/* Brand & Description */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/logo-fonarev.jpg"
                                    alt="FONAREV"
                                    width={120}
                                    height={60}
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                                {siteConfig.description}
                            </p>
                            {/* Social Links */}
                            <div className="mt-6 flex gap-3">
                                <a
                                    href="https://facebook.com/fonarev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary-500 hover:text-white"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a
                                    href={siteConfig.links.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary-500 hover:text-white"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="h-4 w-4" />
                                </a>
                                <a
                                    href={siteConfig.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary-500 hover:text-white"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://youtube.com/@fonarev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary-500 hover:text-white"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h3 className="mb-6 font-heading text-lg font-semibold text-white">
                                Navigation
                            </h3>
                            <ul className="space-y-4">
                                {navConfig.mainNav.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Liens utiles */}
                        <div>
                            <h3 className="mb-6 font-heading text-lg font-semibold text-white">
                                Liens utiles
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/actualites"
                                        className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                    >
                                        Actualités
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/rapports"
                                        className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                    >
                                        Rapports annuels
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/partenaires"
                                        className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                    >
                                        Devenir partenaire
                                    </Link>
                                </li>
                                {navConfig.footerNav.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="mb-6 font-heading text-lg font-semibold text-white">
                                Contact
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                                    <span className="text-sm text-neutral-400">
                                        Avenue de la Justice, N°123<br />
                                        Kinshasa, Gombe<br />
                                        République Démocratique du Congo
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 shrink-0 text-primary-400" />
                                    <a
                                        href="tel:+243123456789"
                                        className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                    >
                                        +243 123 456 789
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 shrink-0 text-primary-400" />
                                    <a
                                        href="mailto:contact@fonarev.cd"
                                        className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                                    >
                                        contact@fonarev.cd
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
                        <p className="text-sm text-neutral-500">
                            © {currentYear} {siteConfig.name}. Tous droits réservés.
                        </p>
                        <p className="text-xs text-neutral-600">
                            Fonds National des Réparations des Victimes des Violences Sexuelles liées aux Conflits et des Victimes des Crimes contre la Paix et la Sécurité de l&apos;Humanité
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
