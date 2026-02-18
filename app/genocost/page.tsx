import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";
import { ArrowRight, CalendarDays, MapPin, Quote } from "lucide-react";
import Image from "next/image";

const COMMEMORATION_DATE_LABEL = "02 août";

const activities = [
    {
        title: "Sensibilisation et mobilisation pour la reconnaissance",
        location: "RDC",
        date: "Toute l’année",
        imageSrc: "/audience.jpeg",
        imageAlt: "Activité de sensibilisation",
        description:
            "Actions d’information et de plaidoyer pour faire connaître la mémoire des crimes et renforcer la reconnaissance des génocides congolais.",
    },
    {
        title: "Side events autour de la commémoration du Genocost",
        location: "Genève / New York",
        date: `Autour du ${COMMEMORATION_DATE_LABEL}`,
        imageSrc: "/genocst.jpg",
        imageAlt: "Side event Genocost",
        description:
            "Rencontres, panels et espaces de dialogue avec des partenaires, institutions et organisations de la société civile.",
    },
    {
        title: "Campagnes de communication internationale",
        location: "Genève",
        date: "Périodes de sessions",
        imageSrc: "/identification.jpeg",
        imageAlt: "Campagne à Genève",
        description:
            "Campagnes ciblées et actions d’influence auprès des acteurs internationaux pour porter la voix des victimes.",
    },
    {
        title: "Plaidoyer et engagement diplomatique",
        location: "New York",
        date: "Périodes de sessions",
        imageSrc: "/identification2.jpg",
        imageAlt: "Engagement à New York",
        description:
            "Participation à des rencontres stratégiques et coordination avec des partenaires pour soutenir la reconnaissance et la mémoire.",
    },
];

const advocacyPlan2025 = [
    {
        period: "T1 2025",
        title: "Préparation du narratif",
        locations: ["RDC", "Genève", "New York"],
        description:
            "Clarifier le message, consolider les éléments de langage, structurer les preuves et aligner les partenaires autour d’un narratif commun sur la reconnaissance.",
    },
    {
        period: "T2 2025",
        title: "Mobilisation & alliances",
        locations: ["RDC", "Genève"],
        description:
            "Renforcer la coordination avec la société civile, les survivantes, les partenaires techniques et les relais diplomatiques pour amplifier la portée du plaidoyer.",
    },
    {
        period: "T2–T3 2025",
        title: "Campagnes internationales ciblées",
        locations: ["Genève", "New York"],
        description:
            "Déployer des campagnes de communication et d’influence, organiser des rencontres stratégiques et des moments médiatiques pour porter la voix des victimes.",
    },
    {
        period: `Autour du ${COMMEMORATION_DATE_LABEL}`,
        title: "Side events & commémoration",
        locations: ["Genève", "New York", "RDC"],
        description:
            "Structurer des panels, échanges et activités de commémoration du Genocost, en transformant la mémoire en action et en engagement institutionnel.",
    },
    {
        period: "T4 2025",
        title: "Suivi, capitalisation & prochaines étapes",
        locations: ["RDC", "Genève", "New York"],
        description:
            "Évaluer l’impact, documenter les résultats, consolider les acquis et préparer la séquence suivante du plaidoyer.",
    },
];

const HEAD_OF_STATE = {
    name: "Chef de l’État",
    imageSrc: "/identification2.jpg",
    imageAlt: "Chef de l’État",
};

const speechExcerpts = [
    {
        title: "Extrait 1",
        date: "À compléter",
        quote:
            "Nous nous engageons à honorer la mémoire, à reconnaître la douleur et à soutenir la dignité des victimes.",
    },
    {
        title: "Extrait 2",
        date: "À compléter",
        quote:
            "La reconnaissance est un pas essentiel vers la justice, la réparation et la non-répétition.",
    },
    {
        title: "Extrait 3",
        date: "À compléter",
        quote:
            "Notre responsabilité collective est de préserver la mémoire et de transformer la commémoration en action.",
    },
];

export default function GenocostPage() {
    return (
        <>
            <PageHero
                title="Genocost"
                subtitle="Une page dédiée à la reconnaissance des génocides congolais et aux actions portées par le FONAREV."
                imageSrc="/genocst.jpg"
                imageAlt="Genocost"
                overlayClassName="bg-primary-950/60"
                priority
            />

            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <AnimateOnScroll animation="fade-in-up">
                                <h2 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                    Reconnaissance, mémoire et réparation
                                </h2>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <p className="mt-6 max-w-2xl text-neutral-600">
                                    Sur cette page, tu trouveras les activités du FONAREV en lien avec la reconnaissance des génocides congolais, des extraits de discours du Chef de l’État,
                                    ainsi que les campagnes et side events organisés notamment à Genève et à New York.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                    <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5">
                                        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                                            <CalendarDays className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-heading text-sm font-semibold text-neutral-900">Date de commémoration</p>
                                            <p className="mt-1 text-sm text-neutral-600">{COMMEMORATION_DATE_LABEL}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5">
                                        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-50 text-secondary-600">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-heading text-sm font-semibold text-neutral-900">Rayonnement</p>
                                            <p className="mt-1 text-sm text-neutral-600">RDC, Genève, New York</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <div className="lg:col-span-5">
                            <AnimateOnScroll animation="fade-in-up" delay={250}>
                                <div className="rounded-2xl bg-primary-500 p-8 text-white">
                                    <p className="font-heading text-xs font-semibold uppercase tracking-wide text-white/80">Point clé</p>
                                    <h3 className="mt-3 font-heading text-2xl font-bold leading-tight">
                                        Autour du {COMMEMORATION_DATE_LABEL}, le FONAREV intensifie la mobilisation.
                                    </h3>
                                    <p className="mt-4 text-sm text-white/85">
                                        Campagnes, plaidoyer, side events et activités de commémoration contribuent à porter la mémoire des victimes et à renforcer la reconnaissance.
                                    </p>
                                    <div className="mt-8">
                                        <AnchorLink href="#activites">
                                            <Button className="cursor-pointer rounded-xl bg-white px-6 py-6 font-heading font-semibold text-primary-600 hover:bg-neutral-100">
                                                Voir les activités
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </AnchorLink>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="activites" className="scroll-mt-28 bg-neutral-50 py-16 lg:py-24">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <AnimateOnScroll animation="fade-in-up">
                            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-secondary-600">Activités</p>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                Toutes les activités liées à la reconnaissance
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="mt-5 text-neutral-600">
                                Voici une vue d’ensemble des initiatives organisées par le FONAREV autour de la reconnaissance des génocides congolais et de la commémoration du Genocost.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6">
                        {activities.map((item, idx) => (
                            <div key={item.title} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]">
                                <AnimateOnScroll animation="fade-in-up" delay={100 + idx * 80}>
                                    <div className="group flex h-full overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm transition-colors hover:border-secondary-200">
                                        <div className="relative w-44 shrink-0 overflow-hidden bg-neutral-100">
                                            <div className="relative h-full min-h-24 w-full">
                                                <Image
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/25 via-neutral-950/0 to-transparent" />
                                            </div>
                                        </div>

                                        <div className="flex min-h-24 flex-1 flex-col p-3">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold leading-none text-primary-700">
                                                    {item.location}
                                                </span>
                                                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold leading-none text-neutral-700">
                                                    {item.date}
                                                </span>
                                            </div>

                                            <p className="mt-2 line-clamp-2 font-heading text-sm font-bold leading-snug text-neutral-900">
                                                {item.title}
                                            </p>
                                            <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-neutral-600">
                                                {item.description}
                                            </p>

                                            <div className="mt-auto pt-2">
                                                <Button
                                                    variant="ghost"
                                                    className="h-8 px-0 font-heading text-xs font-semibold text-secondary-600 hover:bg-transparent hover:text-secondary-700"
                                                >
                                                    Lire
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section
                className="relative overflow-hidden bg-neutral-950 py-16 lg:py-24 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url(/identification2.jpg)" }}
            >
                <div className="absolute inset-0 bg-neutral-950/70" />
                <div className="absolute inset-0 bg-linear-to-tr from-primary-950/40 via-transparent to-secondary-950/30" />
                <Container>
                    <div className="relative grid gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <AnimateOnScroll animation="fade-in-up">
                                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-white/80">Discours</p>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                                    Extraits des discours du Chef de l’État
                                </h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <p className="mt-5 text-white/85">
                                    Une sélection d’extraits pour rappeler l’engagement institutionnel et l’importance de la mémoire, de la reconnaissance et de la justice.
                                </p>
                            </AnimateOnScroll>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid gap-6 md:grid-cols-2">
                                {speechExcerpts.map((item, idx) => (
                                    <AnimateOnScroll key={item.title} animation="fade-in-up" delay={150 + idx * 80}>
                                        <div className="group relative h-full overflow-hidden rounded-2xl border border-primary-300/25 bg-primary-500/15 p-6 shadow-sm backdrop-blur-md">
                                            <Quote className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 text-primary-200/20" />

                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
                                                        <Image src={HEAD_OF_STATE.imageSrc} alt={HEAD_OF_STATE.imageAlt} fill className="object-cover" />
                                                    </div>

                                                    <div>
                                                        <p className="font-heading text-sm font-semibold text-white">{item.title}</p>
                                                        <p className="mt-1 text-xs font-semibold text-white/70">
                                                            {HEAD_OF_STATE.name} • {item.date}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-5 text-base font-medium leading-relaxed text-white italic sm:text-lg">
                                                “{item.quote}”
                                            </p>

                                            <div className="mt-6">
                                                <Button
                                                    variant="ghost"
                                                    className="px-0 font-heading font-semibold text-white hover:bg-transparent hover:text-white/85"
                                                >
                                                    Lire le discours
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                                </Button>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-neutral-50 py-16 lg:py-24">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <AnimateOnScroll animation="fade-in-up">
                            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-secondary-600">Plaidoyer</p>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                Plan d&apos;action du plaidoyer sur la reconnaissance (Exercice 2026)
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <p className="mt-5 text-neutral-600">
                                Roadmap 2025 structurée en phases : préparation du narratif, mobilisation, campagnes internationales, side events et suivi.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="mt-12 mx-auto max-w-4xl">
                        <div className="space-y-6">
                            {advocacyPlan2025.map((step, idx) => (
                                <AnimateOnScroll key={step.title} animation="fade-in-up" delay={150 + idx * 80}>
                                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-primary-600">{step.period}</p>
                                                <h3 className="mt-2 font-heading text-xl font-bold leading-tight text-neutral-900">
                                                    {step.title}
                                                </h3>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-2">
                                                {step.locations.map((loc) => (
                                                    <span
                                                        key={loc}
                                                        className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700"
                                                    >
                                                        <MapPin className="mr-1.5 h-3.5 w-3.5 text-neutral-500" />
                                                        {loc}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-relaxed text-neutral-600">{step.description}</p>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="relative overflow-hidden rounded-none bg-primary-500 px-6 py-12 text-white sm:px-10 lg:px-14">
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary-600/40 via-transparent to-secondary-600/30" />

                        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <AnimateOnScroll animation="fade-in-up">
                                    <p className="font-heading text-xs font-semibold uppercase tracking-wide text-white/85">
                                        Appel à projets de recherche
                                    </p>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fade-in-up" delay={100}>
                                    <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                                        Étudiants, chercheurs, porteurs de projets :
                                        <br />
                                        proposez une recherche sur le Genocost.
                                    </h2>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fade-in-up" delay={200}>
                                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85">
                                        Le FONAREV encourage les initiatives académiques et les travaux de recherche dédiés à la mémoire, la reconnaissance et la documentation.
                                        Soumettez votre note conceptuelle (objectif, méthodologie, calendrier, livrables) pour étude.
                                    </p>
                                </AnimateOnScroll>
                            </div>

                            <div className="lg:col-span-4">
                                <AnimateOnScroll animation="fade-in-up" delay={250}>
                                    <div className="grid gap-3">
                                        <a
                                            href="mailto:contact@fonarev.cd?subject=Projet%20de%20recherche%20Genocost"
                                            className="inline-flex h-12 items-center justify-center rounded-none bg-white px-6 font-heading text-sm font-semibold text-primary-700 transition-colors hover:bg-neutral-100"
                                        >
                                            Soumettre un projet
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                        <a
                                            href="mailto:contact@fonarev.cd?subject=Demande%20d%E2%80%99informations%20-%20Recherche%20Genocost"
                                            className="inline-flex h-12 items-center justify-center rounded-none border border-white/30 bg-transparent px-6 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                        >
                                            Demander des informations
                                        </a>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}