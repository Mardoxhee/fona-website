"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Youtube, Linkedin, Instagram, Facebook, ChevronDown } from "lucide-react";
import { useAppStore } from "@/stores";
import { Button } from "@/components/ui/button";

export function Header() {
    const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useAppStore();
    const [isOpportunitesOpen, setIsOpportunitesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpportunitesOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar - Magenta */}
            <div className="bg-secondary-500">
                <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-white">Restez connecté</span>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-opacity hover:opacity-80"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-opacity hover:opacity-80"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-opacity hover:opacity-80"
                                aria-label="X (Twitter)"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-opacity hover:opacity-80"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-opacity hover:opacity-80"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white transition-opacity hover:opacity-80"
                                aria-label="TikTok"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar - White */}
            <div className="bg-white shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-fonarev.jpg"
                            alt="FONAREV"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        <Link
                            href="/about"
                            className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700 transition-colors hover:text-primary-600"
                        >
                            A propos
                        </Link>
                        <Link
                            href="/actualites"
                            className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700 transition-colors hover:text-primary-600"
                        >
                            Actualités
                        </Link>
                        <button className="flex cursor-pointer items-center gap-1 font-heading text-base font-medium uppercase text-neutral-700 transition-colors hover:text-primary-600">
                            Ressources
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        {/* Dropdown Opportunités */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="flex cursor-pointer items-center gap-1 font-heading text-base font-medium uppercase text-neutral-700 transition-colors hover:text-secondary-500"
                                onClick={() => setIsOpportunitesOpen(!isOpportunitesOpen)}
                            >
                                <span className={isOpportunitesOpen ? "text-secondary-500" : ""}>
                                    OPPORTUNITÉS
                                </span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${isOpportunitesOpen ? "rotate-180 text-secondary-500" : ""}`} />
                            </button>

                            {isOpportunitesOpen && (
                                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg">
                                    <div className="py-2">
                                        <Link
                                            href="/opportunites/offres-emploi"
                                            className="block cursor-pointer px-6 py-4 font-heading text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-secondary-500"
                                            onClick={() => setIsOpportunitesOpen(false)}
                                        >
                                            OFFRES D&apos;EMPLOI
                                        </Link>
                                        <Link
                                            href="/opportunites/appels"
                                            className="block cursor-pointer px-6 py-4 font-heading text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-secondary-500"
                                            onClick={() => setIsOpportunitesOpen(false)}
                                        >
                                            APPELS D&apos;OFFRES
                                        </Link>
                                        <Link
                                            href="/opportunites/appels-contribution"
                                            className="block cursor-pointer px-6 py-4 font-heading text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-secondary-500"
                                            onClick={() => setIsOpportunitesOpen(false)}
                                        >
                                            APPELS À CONTRIBUTION
                                        </Link>
                                        <Link
                                            href="/opportunites/stages"
                                            className="block cursor-pointer px-6 py-4 font-heading text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-secondary-500"
                                            onClick={() => setIsOpportunitesOpen(false)}
                                        >
                                            STAGES
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/contact"
                            className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700 transition-colors hover:text-primary-600"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button className="cursor-pointer rounded-md bg-primary-500 px-6 font-heading font-semibold uppercase tracking-wide hover:bg-primary-600">
                            Devenir Partenaire
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="border-t border-neutral-200 py-4 lg:hidden">
                        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6">
                            <Link
                                href="/about"
                                className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                A propos
                            </Link>
                            <Link
                                href="/actualites"
                                className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Actualités
                            </Link>
                            <Link
                                href="/ressources"
                                className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Ressources
                            </Link>
                            <div className="flex flex-col gap-2">
                                <span className="font-heading text-base font-medium uppercase text-secondary-500">
                                    Opportunités
                                </span>
                                <Link
                                    href="/opportunites/offres-emploi"
                                    className="cursor-pointer pl-4 font-heading text-sm text-neutral-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Offres d&apos;emploi
                                </Link>
                                <Link
                                    href="/opportunites/appels-offres"
                                    className="cursor-pointer pl-4 font-heading text-sm text-neutral-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Appels d&apos;offres
                                </Link>
                                <Link
                                    href="/opportunites/appels-contribution"
                                    className="cursor-pointer pl-4 font-heading text-sm text-neutral-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Appels à contribution
                                </Link>
                                <Link
                                    href="/opportunites/stages"
                                    className="cursor-pointer pl-4 font-heading text-sm text-neutral-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Stages
                                </Link>
                            </div>
                            <Link
                                href="/contact"
                                className="cursor-pointer font-heading text-base font-medium uppercase text-neutral-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Button className="mt-2 w-full cursor-pointer rounded-md bg-primary-500 font-heading font-semibold uppercase tracking-wide">
                                Devenir Partenaire
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
