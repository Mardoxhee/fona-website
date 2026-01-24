import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center py-20">
            <Container size="sm">
                <div className="text-center">
                    <p className="text-base font-semibold text-primary-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Page non trouvée
                    </h1>
                    <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                        Désolé, nous n&apos;avons pas pu trouver la page que vous recherchez.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/">
                            <Button>Retour à l&apos;accueil</Button>
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold text-neutral-900 dark:text-white"
                        >
                            Nous contacter <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
