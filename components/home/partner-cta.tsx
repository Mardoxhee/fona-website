import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function PartnerCTA() {
    return (
        <section className="relative overflow-hidden">
            <div className="grid lg:grid-cols-2 lg:items-stretch">
                {/* Left - Content */}
                <AnimateOnScroll animation="fade-in-left" className="h-full">
                    <div className="flex h-full items-center bg-secondary-600 px-8 py-16 lg:px-16 lg:py-24">
                        <div className="max-w-lg">
                            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                                Rejoignez notre réseau de partenaires
                            </h2>
                            <p className="mt-6 text-lg text-white/90">
                                Le FONAREV collabore avec des ONG locales et internationales pour
                                accompagner les victimes sur le terrain. Ensemble, nous pouvons
                                étendre notre impact et offrir une réparation digne à chaque victime.
                            </p>
                            <div className="mt-8">
                                <Button className="cursor-pointer gap-2 rounded-md bg-white px-6 py-3 font-heading font-medium text-secondary-600 hover:bg-neutral-100">
                                    Devenir partenaire
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Right - Image */}
                <AnimateOnScroll animation="fade-in-right" className="h-full">
                    <div className="relative h-[300px] lg:h-full">
                        <Image
                            src="/identification.jpeg"
                            alt="Partenaires du FONAREV sur le terrain"
                            fill
                            className="object-cover"
                        />
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
