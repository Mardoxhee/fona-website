import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { TenderCard } from "@/components/opportunities/tender-card";
import { ProcurementPlanCard } from "@/components/opportunities/procurement-plan-card";
import { procurementPlan, tenders } from "@/lib/opportunities";

export default function AppelsOffrePage() {
    return (
        <section className="bg-white py-14 lg:py-20">
            <Container>
                <div className="relative mb-10 overflow-hidden border border-neutral-200 bg-white p-8">
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary-500/10 via-white to-secondary-500/10" />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/0 via-white/50 to-white" />

                    <AnimateOnScroll animation="fade-in-up">
                        <div className="relative">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                                Opportunités
                            </p>
                            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                                Appels d&apos;offre
                            </h1>
                            <p className="mt-4 max-w-2xl text-sm text-neutral-600">
                                Consultez les appels d&apos;offre en cours, téléchargez les dossiers et préparez votre soumission.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <div className="mt-10 space-y-6">
                            {tenders.map((tender, idx) => (
                                <AnimateOnScroll key={tender.id} animation="fade-in-up" delay={80 + idx * 60}>
                                    <TenderCard tender={tender} />
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24">
                            <AnimateOnScroll animation="fade-in-up" delay={120}>
                                <div className="relative overflow-hidden border border-neutral-200 bg-white p-6">
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary-500/10 via-white to-secondary-500/10" />

                                    <p className="relative text-xs font-semibold uppercase tracking-wide text-neutral-900">
                                        Plan de passation de marché
                                    </p>
                                    <p className="relative mt-3 text-sm text-neutral-600">
                                        Aperçu par type de marché. Mise à jour périodique selon le calendrier interne.
                                    </p>

                                    <div className="relative mt-6 space-y-4">
                                        {procurementPlan.map((item) => (
                                            <ProcurementPlanCard key={item.id} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}