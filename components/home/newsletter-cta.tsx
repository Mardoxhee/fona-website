"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type NewsletterCtaProps = {
    title: string;
    subtitle: string;
    placeholder?: string;
    buttonLabel?: string;
    onSubmitEmail?: (email: string) => void;
    className?: string;
};

export function NewsletterCta({
    title,
    subtitle,
    placeholder = "Email",
    buttonLabel = "S’abonner",
    onSubmitEmail,
    className,
}: NewsletterCtaProps) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitEmail?.(email);
        setEmail("");
    };

    return (
        <section className={className ?? "bg-neutral-50 py-20"}>
            <div className="mx-auto max-w-3xl px-4 text-center">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">{title}</h2>
                <p className="mt-4 text-sm text-neutral-600">{subtitle}</p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        required
                        className="w-full max-w-sm border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:w-auto sm:min-w-[320px]"
                    />
                    <Button
                        type="submit"
                        className="w-full cursor-pointer rounded-md bg-primary-600 px-7 py-3 font-heading font-semibold text-white hover:bg-primary-700 sm:w-auto"
                    >
                        {buttonLabel}
                    </Button>
                </form>
            </div>
        </section>
    );
}
