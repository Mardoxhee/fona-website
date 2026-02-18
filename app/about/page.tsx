import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { AnchorLink } from "@/components/ui/anchor-link";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Gavel, HandCoins, Plus } from "lucide-react";

export default function QuiSommesNousPage() {
    return (
        <>
            <PageHero
                title="Qui sommes-nous ?"
                subtitle="Un fonds public pour la justice, la dignité et la réparation des survivantes en RDC."
                imageSrc="/identification.jpeg"
                imageAlt="Qui sommes-nous"
                priority
            />

            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <AnimateOnScroll animation="fade-in-up">
                                <h2 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                    Le FONAREV, pilier de la justice transitionnelle
                                    <br />
                                    au service des victimes.
                                </h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <p className="mt-6 max-w-2xl text-neutral-600">
                                    Le FONAREV est la réponse institutionnelle de la RDC pour opérationnaliser la justice transitionnelle, axée sur la réparation des victimes de violences sexuelles et de crimes de guerre (1993-aujourd&apos;hui). Créé en 2022, il vise la réhabilitation, l&apos;indemnisation, et l&apos;accompagnement des victimes, jouant un rôle clé dans la mémoire nationale et la paix durable.
                                </p>
                            </AnimateOnScroll>
                        </div>

                        <aside className="lg:col-span-4">
                            <div className="lg:sticky lg:top-28">
                                <AnimateOnScroll animation="fade-in-up" delay={150}>
                                    <p className="font-heading text-sm font-semibold uppercase tracking-wide text-neutral-900">
                                        Dans cette section
                                    </p>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fade-in-up" delay={250}>
                                    <nav className="mt-6 space-y-4 text-sm">
                                        <AnchorLink href="#qui-sommes-nous" className="block text-neutral-700 hover:text-secondary-500">
                                            Qui sommes-nous
                                        </AnchorLink>
                                        <AnchorLink href="#notre-vision" className="block text-neutral-700 hover:text-secondary-500">
                                            Notre vision
                                        </AnchorLink>
                                        <AnchorLink href="#genocost" className="block text-neutral-700 hover:text-secondary-500">
                                            Genocost
                                        </AnchorLink>
                                        <AnchorLink href="#nos-missions" className="block text-neutral-700 hover:text-secondary-500">
                                            Nos missions
                                        </AnchorLink>
                                    </nav>
                                </AnimateOnScroll>
                            </div>
                        </aside>
                    </div>

                    {/* <div className="mt-16 space-y-16">
                        <section id="qui-sommes-nous" className="scroll-mt-28">
                            <h3 className="font-heading text-2xl font-bold text-neutral-900">Qui sommes-nous</h3>
                            <p className="mt-4 text-neutral-600">
                                Le FONAREV est une institution publique créée pour accompagner les victimes, soutenir leur
                                parcours de réparation et renforcer la dignité des survivantes et survivants.
                            </p>
                        </section>

                        <section id="notre-vision" className="scroll-mt-28">
                            <h3 className="font-heading text-2xl font-bold text-neutral-900">Notre vision</h3>
                            <p className="mt-4 text-neutral-600">
                                Construire une société où les victimes obtiennent justice, réparation et reconnaissance, et où
                                les mécanismes publics garantissent une prise en charge durable.
                            </p>
                        </section>

                        <section id="genocost" className="scroll-mt-28">
                            <h3 className="font-heading text-2xl font-bold text-neutral-900">Genocost</h3>
                            <p className="mt-4 text-neutral-600">
                                Le FONAREV œuvre pour la mémoire, la reconnaissance et la justice face aux crimes commis en RDC,
                                notamment ceux motivés par l&apos;exploitation économique des ressources.
                            </p>
                        </section>

                        <section id="nos-missions" className="scroll-mt-28">
                            <h3 className="font-heading text-2xl font-bold text-neutral-900">Nos missions</h3>
                            <p className="mt-4 text-neutral-600">
                                Identifier et accompagner les victimes, faciliter l&apos;accès aux soins et à la justice, et mettre en
                                œuvre des programmes de réparation adaptés aux besoins sur le terrain.
                            </p>
                        </section>
                    </div> */}
                </Container>
            </section>

            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
                        <AnimateOnScroll animation="fade-in-left" className="h-full">
                            <div className="h-full overflow-hidden rounded-xl bg-neutral-100">
                                <div className="relative h-[520px] w-full lg:h-full">
                                    <Image
                                        src="/identification2.jpg"
                                        alt="À propos du FONAREV"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <div className="flex flex-col lg:h-full lg:pt-2">
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <p className="font-heading text-xs font-semibold uppercase tracking-wide text-neutral-900">
                                    À propos du FONAREV
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl">
                                    Leadership, réparation
                                    <br />
                                    et accompagnement pour
                                    <br />
                                    une paix durable.
                                </h2>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={300} className="flex-1">
                                <div className="mt-5 flex-1 space-y-4 text-sm leading-relaxed text-neutral-600 text-justify">
                                    <p>
                                        Le FONAREV (Fonds National des Réparations des Victimes de violences sexuelles liées aux conflits et
                                        des victimes des crimes contre la paix et la sécurité de l&apos;humanité) est un établissement public
                                        de la République démocratique du Congo créé en 2022.
                                    </p>
                                    <p>
                                        Il répond aux conflits armés persistants et vise à réparer les préjudices subis depuis 1993, en
                                        plaçant les victimes au centre de ses actions.
                                    </p>
                                    <p>
                                        Sous la tutelle du Ministère des droits humains, il agit pour la dignité des survivant(e)s, soutient
                                        l&apos;identification des victimes et mobilise des ressources, notamment issues d&apos;une partie de la
                                        redevance minière.
                                    </p>
                                    <p>
                                        Le FONAREV a déjà recensé des centaines de milliers de victimes et travaille avec des partenaires,
                                        dont le système des Nations Unies, pour une réparation effective et mesurable.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            <div className="mt-auto pt-6">
                                <AnimateOnScroll animation="fade-in-up" delay={400}>
                                    <Button className="cursor-pointer gap-2 rounded-xl bg-primary-500 px-8 py-6 font-heading font-semibold text-white hover:bg-secondary-500">
                                        En savoir plus
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="nos-missions" className=" py-16 lg:py-24 scroll-mt-28 bg-neutral-50">
                <Container>
                    <div className="relative text-center">
                        <AnimateOnScroll animation="fade-in-up">
                            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                                Nos missions
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll
                            animation="fade-in"
                            delay={150}
                            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none"
                        >
                            <p className="font-heading text-7xl font-bold text-neutral-900/4 sm:text-8xl lg:text-9xl">
                                Missions
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                Un accompagnement centré sur la réparation,
                                <br />
                                la justice et l&apos;indemnisation des victimes.
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-2xl bg-neutral-50 ">
                        <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-3 lg:gap-8">
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <div className="group h-full rounded-2xl border-b-4 border-transparent bg-white p-8 shadow-xs ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-neutral-300 group-hover:border-secondary-500">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 group-hover:bg-secondary-500">
                                        <Search className="h-5 w-5 group-hover:text-white" />
                                    </div>
                                    <h3 className="mt-6 font-heading text-lg font-semibold text-neutral-900">
                                        L&apos;identification minutieuse des victimes
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                        Recenser, documenter et consolider les informations afin d&apos;assurer une prise en charge juste,
                                        équitable et fondée sur les faits.
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-secondary-500">
                                            <ArrowRight className="h-4 w-4 transition-colors group-hover:text-white" />
                                        </span>
                                        En savoir plus
                                    </button>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <div className="group h-full rounded-2xl border-b-4 border-transparent bg-white p-8 shadow-xs ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-neutral-300 group-hover:border-secondary-500">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 group-hover:bg-secondary-500">
                                        <Gavel className="h-5 w-5 group-hover:text-white" />
                                    </div>
                                    <h3 className="mt-6 font-heading text-lg font-semibold text-neutral-900">
                                        L&apos;accompagnement des victimes dans leur accès à la justice
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                        Faciliter les démarches, orienter vers les mécanismes de recours et renforcer l&apos;accès aux
                                        décisions judiciaires et à la reconnaissance des droits.
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-secondary-500">
                                            <ArrowRight className="h-4 w-4 transition-colors group-hover:text-white" />
                                        </span>
                                        En savoir plus
                                    </button>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={300}>
                                <div className="group h-full rounded-2xl border-b-4 border-transparent bg-white p-8 shadow-xs ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-neutral-300 group-hover:border-secondary-500">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 group-hover:bg-secondary-500">
                                        <HandCoins className="h-5 w-5 group-hover:text-white" />
                                    </div>
                                    <h3 className="mt-6 font-heading text-lg font-semibold text-neutral-900">
                                        La facilitation de l&apos;indemnisation des victimes
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                        Mettre en œuvre des mécanismes d&apos;indemnisation transparents et adaptés, en coordination avec les
                                        partenaires institutionnels et techniques.
                                    </p>

                                    <button
                                        type="button"
                                        className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-secondary-500">
                                            <ArrowRight className="h-4 w-4 transition-colors group-hover:text-white" />
                                        </span>
                                        En savoir plus
                                    </button>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-primary-500 py-16 lg:py-24">
                <Container>
                    <div className="relative text-center">
                        <AnimateOnScroll animation="fade-in-up">
                            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                                Équipe dirigeante
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll
                            animation="fade-in"
                            delay={150}
                            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none"
                        >
                            <p className="font-heading text-7xl font-bold text-white/10 sm:text-8xl lg:text-9xl">
                                Équipe
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                                Une équipe au service de la réparation
                                <br />
                                et de la justice pour les victimes.
                            </h2>
                        </AnimateOnScroll>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <div className="overflow-hidden rounded-none bg-white shadow-md">
                                <div className="relative">
                                    <div className="relative h-[240px] w-full">
                                        <Image
                                            src="/identification2.jpg"
                                            alt="Président du Conseil d&apos;Administration"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-secondary-500 hover:text-white"
                                        aria-label="Voir le profil"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="font-heading text-base font-bold text-neutral-900">Eddy MBANZU DIEKUZEIKO</p>
                                    <p className="mt-1 text-xs text-neutral-500">PCA</p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <div className="overflow-hidden rounded-none bg-white shadow-md">
                                <div className="relative">
                                    <div className="relative h-[240px] w-full">
                                        <Image
                                            src="/valeur.jpg"
                                            alt="Directeur Général"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-secondary-500 hover:text-white"
                                        aria-label="Voir le profil"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="font-heading text-base font-bold text-neutral-900">Patrick FATA MAKUNGA</p>
                                    <p className="mt-1 text-xs text-neutral-500">Directeur Général</p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={300}>
                            <div className="overflow-hidden rounded-none bg-white shadow-md">
                                <div className="relative">
                                    <div className="relative h-[240px] w-full">
                                        <Image
                                            src="/audience.jpeg"
                                            alt="Directeur Général Adjoint Administration et Finance"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-secondary-500 hover:text-white"
                                        aria-label="Voir le profil"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="font-heading text-base font-bold text-neutral-900">Kevin NGUNGA MAKIEDI</p>
                                    <p className="mt-1 text-xs text-neutral-500">DGA Administration et Finance</p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-in-up" delay={400}>
                            <div className="overflow-hidden rounded-none bg-white shadow-md">
                                <div className="relative">
                                    <div className="relative h-[240px] w-full">
                                        <Image
                                            src="/genocst.jpg"
                                            alt="Directeur Général Adjoint Opérations"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-colors hover:bg-secondary-500 hover:text-white"
                                        aria-label="Voir le profil"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="font-heading text-base font-bold text-neutral-900">Emmanuella ZANDI MUDERHUWA</p>
                                    <p className="mt-1 text-xs text-neutral-500">DGA Opérations</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

    
                </Container>
            </section>
        </>
    );
}