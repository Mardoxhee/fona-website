import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Nous contacter"
                subtitle="Un point d’entrée unique pour vos demandes institutionnelles, partenariats, presse et orientations des survivantes."
                imageSrc="/reparation.jpg"
                imageAlt="Contact FONAREV"
                priority
            />

            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7">
                            <AnimateOnScroll animation="fade-in-up">
                                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                                    Informations de contact
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                    Nous sommes à votre écoute.
                                </h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600">
                                    Pour garantir un traitement rapide et sécurisé, merci de préciser l’objet de votre demande (presse,
                                    partenariat, orientation, documentation, etc.) et, si possible, de joindre les éléments utiles.
                                </p>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={250}>
                                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white">
                                                <MapPin className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p className="font-heading text-sm font-semibold text-neutral-900">Adresse</p>
                                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                                    Immeuble Taverne<br />
                                                    Avenue Colonel Lukusa<br />
                                                    Kinshasa, Gombe<br />
                                                    République Démocratique du Congo
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-500 text-white">
                                                <Phone className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p className="font-heading text-sm font-semibold text-neutral-900">Téléphone</p>
                                                <p className="mt-2 text-sm text-neutral-600">
                                                    <a className="hover:text-secondary-500" href="tel:+243123456789">
                                                        +243 123 456 789
                                                    </a>
                                                </p>
                                                <p className="mt-2 text-xs text-neutral-500">
                                                    Standard (jours ouvrables)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white">
                                                <Mail className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p className="font-heading text-sm font-semibold text-neutral-900">Email</p>
                                                <p className="mt-2 text-sm text-neutral-600">
                                                    <a className="hover:text-secondary-500" href="mailto:contact@fonarev.cd">
                                                        contact@fonarev.cd
                                                    </a>
                                                </p>
                                                <p className="mt-2 text-xs text-neutral-500">
                                                    Réponse sous 48h ouvrées
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-500 text-white">
                                                <Clock className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p className="font-heading text-sm font-semibold text-neutral-900">Horaires</p>
                                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                                    Lundi – Vendredi : 08:30 – 16:30
                                                    <br />
                                                    Samedi – Dimanche : fermé
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fade-in-up" delay={350}>
                                <div className="mt-10 rounded-2xl bg-white p-6 shadow-xs ring-1 ring-neutral-200">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
                                            <ShieldCheck className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <p className="font-heading text-sm font-semibold text-neutral-900">
                                                Confidentialité & protection des données
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                                Ne partagez pas d’informations sensibles dans le champ &quot;message&quot; (identités complètes,
                                                documents médicaux, etc.). Pour toute orientation, nous vous indiquerons le canal sécurisé adapté.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <aside className="lg:col-span-5">
                            <div className="lg:sticky lg:top-28">
                                <AnimateOnScroll animation="fade-in-up" delay={150}>
                                    <div className="overflow-hidden rounded-2xl bg-neutral-900">
                                        <div className="relative h-52 w-full">
                                            <Image
                                                src="/identification2.jpg"
                                                alt="Siège du FONAREV"
                                                fill
                                                className="object-cover opacity-80"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                                                Formulaire officiel
                                            </p>
                                            <p className="mt-3 text-sm leading-relaxed text-white/85">
                                                Utilisez ce formulaire pour une prise en charge structurée. Notre équipe orientera votre demande
                                                vers le service compétent.
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fade-in-up" delay={250}>
                                    <div className="mt-6 rounded-2xl bg-white p-6 shadow-xs ring-1 ring-neutral-200">
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-neutral-800" htmlFor="fullName">
                                                    Nom et prénom
                                                </label>
                                                <input
                                                    id="fullName"
                                                    name="fullName"
                                                    type="text"
                                                    autoComplete="name"
                                                    placeholder="Votre nom"
                                                    className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-800" htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="nom@exemple.cd"
                                                    className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-800" htmlFor="subject">
                                                    Objet
                                                </label>
                                                <input
                                                    id="subject"
                                                    name="subject"
                                                    type="text"
                                                    placeholder="Ex. Demande d'information, Partenariat, Presse"
                                                    className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-800" htmlFor="message">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    placeholder="Décrivez votre demande de manière concise."
                                                    className="mt-2 w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                    required
                                                />
                                                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                                                    En envoyant ce message, vous acceptez que vos informations soient utilisées uniquement pour le
                                                    traitement de votre demande.
                                                </p>
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full cursor-pointer rounded-xl bg-primary-500 px-8 py-6 font-heading font-semibold text-white hover:bg-secondary-500"
                                            >
                                                Envoyer la demande
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </form>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            <section className="bg-neutral-50 py-16 lg:py-24">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-5">
                            <AnimateOnScroll animation="fade-in-up">
                                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                                    Presse & partenariats
                                </p>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={100}>
                                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                                    Demandes officielles
                                    <br />
                                    et collaboration.
                                </h2>
                            </AnimateOnScroll>
                            <AnimateOnScroll animation="fade-in-up" delay={200}>
                                <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600">
                                    <p>
                                        Les sollicitations médias et partenariats doivent indiquer la finalité, les délais et le périmètre de
                                        la demande. Nous privilégions les demandes documentées et respectueuses du cadre institutionnel.
                                    </p>
                                    <p>
                                        Pour les projets de coopération, merci de joindre une note de concept et une présentation
                                        organisationnelle.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <div className="lg:col-span-7">
                            <AnimateOnScroll animation="fade-in-left" delay={150}>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-xs ring-1 ring-neutral-200">
                                        <div className="relative h-44">
                                            <Image src="/valeur.jpg" alt="Presse" fill className="object-cover" />
                                        </div>
                                        <div className="p-6">
                                            <p className="font-heading text-sm font-semibold text-neutral-900">Relations presse</p>
                                            <p className="mt-2 text-sm text-neutral-600">
                                                Communiqués, demandes d’interview et éléments de référence.
                                            </p>
                                            <p className="mt-4 text-sm text-neutral-700">
                                                <a className="font-medium hover:text-secondary-500" href="mailto:presse@fonarev.cd">
                                                    presse@fonarev.cd
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-2xl bg-white shadow-xs ring-1 ring-neutral-200">
                                        <div className="relative h-44">
                                            <Image src="/dg-patrick.jpg" alt="Partenariats" fill className="object-cover" />
                                        </div>
                                        <div className="p-6">
                                            <p className="font-heading text-sm font-semibold text-neutral-900">Partenariats</p>
                                            <p className="mt-2 text-sm text-neutral-600">
                                                Coopération, appui technique et initiatives de réparation.
                                            </p>
                                            <p className="mt-4 text-sm text-neutral-700">
                                                <a className="font-medium hover:text-secondary-500" href="mailto:partenariats@fonarev.cd">
                                                    partenariats@fonarev.cd
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}