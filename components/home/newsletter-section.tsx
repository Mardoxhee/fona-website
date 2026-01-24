"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement newsletter subscription
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <section className="relative overflow-hidden bg-primary-500 py-16">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/reparation.jpg')" }}
            />

            <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    Restez informé sur nos activités
                </h2>
                <p className="mt-4 text-white/90">
                    Entrez votre email pour recevoir les derniers articles et
                    campagnes sur les activités du FONAREV
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full max-w-sm rounded-md border-0 bg-white/90 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white sm:w-auto sm:min-w-[300px]"
                    />
                    <Button
                        type="submit"
                        className="w-full cursor-pointer rounded-md bg-white px-6 py-3 font-heading font-medium text-primary-500 hover:bg-neutral-100 sm:w-auto"
                    >
                        S&apos;abonner
                    </Button>
                </form>
            </div>
        </section>
    );
}
