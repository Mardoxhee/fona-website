"use client";

import { useState, useEffect, useRef } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

interface Province {
    id: string;
    svgId: string;
    name: string;
    description: string;
    incidents: number;
    expectedVictims: number;
    identified?: number;
}

const provinces: Province[] = [
    {
        id: "nord-kivu",
        svgId: "CD-NK",
        name: "Province du Nord-Kivu",
        description: "Zone prioritaire d'intervention avec un accompagnement renforcé des victimes de violences sexuelles liées aux conflits armés.",
        incidents: 2450,
        expectedVictims: 45000,
        identified: 12000,
    },
    {
        id: "sud-kivu",
        svgId: "CD-SK",
        name: "Province du Sud-Kivu",
        description: "Programme intensif d'identification et de réparation des victimes dans les territoires affectés par les conflits.",
        incidents: 1890,
        expectedVictims: 38000,
        identified: 15000,
    },
    {
        id: "ituri",
        svgId: "CD-OR",
        name: "Province Orientale / Ituri",
        description: "Intervention d'urgence pour les victimes des violences intercommunautaires et des groupes armés.",
        incidents: 1650,
        expectedVictims: 32000,
        identified: 9500,
    },
    {
        id: "maniema",
        svgId: "CD-MA",
        name: "Province du Maniema",
        description: "Programme de soutien aux victimes avec un focus sur l'accompagnement psychosocial.",
        incidents: 720,
        expectedVictims: 15000,
        identified: 5500,
    },
    {
        id: "katanga",
        svgId: "CD-KA",
        name: "Province du Katanga",
        description: "Accompagnement des victimes des conflits avec un programme de réinsertion économique.",
        incidents: 980,
        expectedVictims: 22000,
    },
    {
        id: "kasai-oriental",
        svgId: "CD-KE",
        name: "Province du Kasaï-Oriental",
        description: "Programme de réparation suite aux violences de 2016-2017 avec un focus sur la réinsertion sociale.",
        incidents: 1120,
        expectedVictims: 28000,
        identified: 8000,
    },
    {
        id: "kasai-occidental",
        svgId: "CD-KW",
        name: "Province du Kasaï-Occidental",
        description: "Accompagnement des victimes des violences avec un programme de réconciliation communautaire.",
        incidents: 890,
        expectedVictims: 19000,
        identified: 6500,
    },
    {
        id: "equateur",
        svgId: "CD-EQ",
        name: "Province de l'Équateur",
        description: "Programme d'identification et de soutien aux victimes dans les zones reculées.",
        incidents: 540,
        expectedVictims: 12000,
    },
];

const activeProvinceIds = ["CD-NK", "CD-SK", "CD-OR", "CD-MA", "CD-KA", "CD-KE", "CD-KW", "CD-EQ"];

export function InterventionMap() {
    const [hoveredProvince, setHoveredProvince] = useState<Province | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadAndStyleSvg = async () => {
            if (!mapRef.current) return;

            try {
                const response = await fetch("/congo-dr.svg");
                const svgText = await response.text();
                mapRef.current.innerHTML = svgText;

                const svg = mapRef.current.querySelector("svg");
                if (svg) {
                    // Ajouter viewBox si absent pour un affichage correct
                    if (!svg.getAttribute("viewBox")) {
                        svg.setAttribute("viewBox", "0 0 612.58331 604.7099");
                    }
                    svg.removeAttribute("width");
                    svg.removeAttribute("height");
                    svg.style.width = "100%";
                    svg.style.height = "auto";
                    svg.style.maxWidth = "400px";
                    svg.style.margin = "0 auto";
                    svg.style.display = "block";

                    const paths = svg.querySelectorAll("path");
                    paths.forEach((path) => {
                        const id = path.getAttribute("id");
                        const isActive = id && activeProvinceIds.includes(id);

                        path.style.fill = isActive ? "#007EBA" : "#d1d5db";
                        path.style.stroke = isActive ? "#ffffff" : "#9ca3af";
                        path.style.strokeWidth = isActive ? "2" : "1";
                        path.style.transition = "all 0.3s ease";
                        path.style.cursor = isActive ? "pointer" : "default";

                        if (isActive) {
                            path.addEventListener("mouseenter", () => {
                                path.style.fill = "#005a8a";
                                const province = provinces.find(p => p.svgId === id);
                                if (province) setHoveredProvince(province);
                            });

                            path.addEventListener("mouseleave", () => {
                                path.style.fill = "#007EBA";
                                setHoveredProvince(null);
                            });
                        }
                    });
                }
            } catch (error) {
                console.error("Error loading SVG:", error);
            }
        };

        loadAndStyleSvg();
    }, []);

    const displayedProvince = hoveredProvince || provinces[0];

    return (
        <section className="relative overflow-hidden bg-neutral-100 py-20 lg:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-3">
                    {/* Left Content */}
                    <div className="lg:col-span-1">
                        <AnimateOnScroll animation="fade-in-up">
                            <h2 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                PROVINCES PILOTES
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <p className="mt-6 text-neutral-600">
                                FONAREV agit dans les provinces les plus touchées de la
                                République Démocratique du Congo pour identifier les victimes,
                                garantir leur droit à la réparation, et apporter un soutien médical et
                                juridique.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <div className="mt-8">
                                <Button className="cursor-pointer gap-2 rounded-md bg-primary-500 px-6 py-3 font-heading font-medium text-white hover:bg-primary-600">
                                    <FileText className="h-4 w-4" />
                                    Télécharger le rapport détaillé 2025
                                </Button>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Center - Map */}
                    <div className="relative lg:col-span-1">
                        <AnimateOnScroll animation="scale-in" delay={100}>
                            <div ref={mapRef} className="relative mx-auto w-full max-w-[400px]" />
                        </AnimateOnScroll>
                    </div>

                    {/* Right - Province Info Card */}
                    <div className="lg:col-span-1">
                        <AnimateOnScroll animation="fade-in-left" delay={200}>
                            <div className="rounded-lg bg-white p-6 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-primary-500" />
                                    <h3 className="font-heading text-xl font-bold text-neutral-900">
                                        {displayedProvince.name}
                                    </h3>
                                </div>
                                <p className="mt-4 text-sm text-neutral-600">
                                    {displayedProvince.description}
                                </p>
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-heading text-2xl font-bold text-primary-500">
                                            {displayedProvince.incidents.toLocaleString("fr-FR")}
                                        </span>
                                        <span className="text-sm text-neutral-500">Incidents recensés</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-heading text-2xl font-bold text-primary-500">
                                            {displayedProvince.expectedVictims.toLocaleString("fr-FR")}
                                        </span>
                                        <span className="text-sm text-neutral-500">Victimes attendues</span>
                                    </div>
                                    {displayedProvince.identified && (
                                        <div className="flex items-center justify-between">
                                            <span className="font-heading text-2xl font-bold text-secondary-500">
                                                {displayedProvince.identified.toLocaleString("fr-FR")}
                                            </span>
                                            <span className="text-sm text-neutral-500">Victimes identifiées</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </Container>
        </section>
    );
}
