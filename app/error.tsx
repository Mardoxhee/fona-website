"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="flex min-h-[60vh] items-center justify-center py-20">
            <Container size="sm">
                <div className="text-center">
                    <p className="text-base font-semibold text-error">Erreur</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                        Une erreur est survenue
                    </h1>
                    <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                        Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez
                        réessayer.
                    </p>
                    <div className="mt-10">
                        <Button onClick={() => reset()}>Réessayer</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
