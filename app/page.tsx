import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, UserCheck, Stethoscope, Gavel, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroSlider } from "@/components/home/hero-slider";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { FeaturedArticle } from "@/components/home/featured-article";
import { ArticleCard, Article } from "@/components/home/article-card";
import { InterventionMap } from "@/components/home/intervention-map";
import { PartnerCTA } from "@/components/home/partner-cta";
import { NewsletterSection } from "@/components/home/newsletter-section";

const featuredArticle: Article = {
  id: "1",
  title: "Le FONAREV renforce les capacités à Kananga pour les écosystèmes œuvrant dans l'accompagnement judiciaire des victimes",
  slug: "fonarev-renforce-capacites-kananga",
  image: "/valeur.jpg",
  date: "20 Mai 2025",
};

const recentArticles: Article[] = [
  {
    id: "2",
    title: "Le FONAREV reçoit la Rapporteuse spéciale de l'ONU sur les droits des personnes déplacées internes",
    slug: "fonarev-recoit-rapporteuse-onu",
    image: "/identification2.jpg",
    date: "26 Mai 2025",
  },
  {
    id: "3",
    title: "Lancement du programme d'indemnisation des victimes dans la province du Kasaï",
    slug: "lancement-programme-indemnisation-kasai",
    image: "/audience.jpeg",
    date: "26 Mai 2025",
  },
  {
    id: "4",
    title: "Le FONAREV participe à la conférence internationale sur les réparations",
    slug: "fonarev-conference-internationale-reparations",
    image: "/genocst.jpg",
    date: "26 Mai 2025",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Qui sommes-nous Section */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <AnimateOnScroll animation="fade-in-up">
                <h2 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                  Un fonds national pour réparer les injustices de la guerre
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={100}>
                <p className="mt-6 text-neutral-600">
                  <strong>Le Fonds National des Réparations des Victimes des Violences Sexuelles liées
                    aux Conflits et des Victimes des Crimes contre la Paix et la Sécurité de l&apos;Humanité
                    (FONAREV)</strong> est une institution publique créée pour accompagner et réparer les victimes
                  en République Démocratique du Congo.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <p className="mt-4 text-neutral-600">
                  Né d&apos;un plaidoyer historique porté par la Première Dame Denise Nyakeru
                  Tshisekedi, le Fonds agit pour la justice, la dignité et la reconnaissance de
                  milliers de victimes longtemps ignorées.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={300}>
                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="cursor-pointer gap-2 rounded-md border-neutral-900 px-6 py-3 font-heading font-medium text-neutral-900 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Stats Card */}
            <AnimateOnScroll animation="fade-in-left" delay={200}>
              <div className="rounded-2xl bg-primary-500 p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <UserCheck className="mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-heading text-2xl font-bold">181.532</p>
                      <p className="text-sm text-primary-100">Victimes identifiées</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Stethoscope className="mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-heading text-2xl font-bold">659</p>
                      <p className="text-sm text-primary-100">Cas d&apos;urgences médicales traités</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gavel className="mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-heading text-2xl font-bold">1.757</p>
                      <p className="text-sm text-primary-100">Décisions judiciaires obtenues</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-heading text-2xl font-bold">142.451</p>
                      <p className="text-sm text-primary-100">Ménages collectifs soutenus</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start gap-3">
                    <HomeIcon className="mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-heading text-2xl font-bold">36.665</p>
                      <p className="text-sm text-primary-100">Ménages ordinaires accompagnés</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-xs text-primary-200">
                  *Statistiques conforment au rapport annuel 2025
                </p>
                <div className="mt-6">
                  <Button className="cursor-pointer rounded-md bg-white px-6 py-3 font-heading font-semibold text-primary-600 hover:bg-primary-50">
                    Voir le rapport
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Genocost Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <AnimateOnScroll animation="fade-in-up">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                Vers la reconnaissance des génocides congolais
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={100}>
            <div className="grid items-center gap-0 overflow-hidden rounded-2xl bg-neutral-100 lg:grid-cols-2">
              {/* Left Image */}
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/genocst.jpg"
                  alt="Genocost - Hommage aux millions de morts"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right Content */}
              <div className="p-10 lg:p-16">
                <h3 className="font-heading text-3xl font-bold text-neutral-900 lg:text-4xl">
                  GENOCOST
                </h3>
                <p className="mt-4 text-lg italic text-neutral-600">
                  &quot;Génocide pour des gains économiques.&quot;
                </p>
                <p className="mt-6 text-neutral-600">
                  Un mot nouveau pour une tragédie historique trop ignorée.
                  Des millions de Congolais ont payé de leur vie l&apos;exploitation
                  brutale des ressources naturelles de leur pays.
                </p>
                <p className="mt-4 text-neutral-600">
                  Le FONAREV œuvre pour la reconnaissance internationale de ces crimes
                  et pour que justice soit rendue aux victimes et à leurs descendants.
                </p>
                <div className="mt-8">
                  <Link
                    href="/genocost"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-neutral-900 px-6 py-3 font-heading text-sm font-medium text-neutral-900 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Actualités Section */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <Container>
          <AnimateOnScroll animation="fade-in-up">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-neutral-900">
                NOS Actualités
              </h2>
              <Link
                href="/actualites"
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-neutral-900 px-6 py-3 font-heading text-sm font-medium text-neutral-900 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                Toutes les actualités
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="mt-10">
            {/* Featured Article */}
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <FeaturedArticle article={featuredArticle} />
            </AnimateOnScroll>

            {/* Recent Articles Grid */}
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {recentArticles.map((article, index) => (
                <AnimateOnScroll key={article.id} animation="fade-in-up" delay={200 + index * 100}>
                  <ArticleCard article={article} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Partner CTA Section */}
      <PartnerCTA />

      {/* Intervention Map Section */}
      <InterventionMap />

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
