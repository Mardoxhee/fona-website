import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import type { Tender } from "@/lib/opportunities";

type TenderCardProps = {
    tender: Tender;
    className?: string;
};

const typeAccentBorder: Record<Tender["type"], string> = {
    Travaux: "border-l-primary-600",
    Fournitures: "border-l-secondary-600",
    Services: "border-l-primary-600",
    Consultance: "border-l-secondary-600",
};

const typeTone: Record<Tender["type"], string> = {
    Travaux: "bg-primary-500/10 text-primary-800 border-primary-200",
    Fournitures: "bg-secondary-500/10 text-secondary-800 border-secondary-200",
    Services: "bg-primary-500/10 text-primary-800 border-primary-200",
    Consultance: "bg-secondary-500/10 text-secondary-800 border-secondary-200",
};

const statusTone: Record<Tender["status"], string> = {
    Ouvert: "bg-emerald-500/10 text-emerald-800 border-emerald-200",
    "Bientôt": "bg-amber-500/10 text-amber-800 border-amber-200",
    Clôturé: "bg-neutral-500/10 text-neutral-700 border-neutral-200",
};

export function TenderCard({ tender, className }: TenderCardProps) {
    return (
        <div
            className={
                className ??
                `group relative overflow-hidden border border-neutral-200 bg-white p-6 border-l-4 transition-colors hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-sm ${typeAccentBorder[tender.type]
                }`
            }
        >
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-neutral-500">{tender.ref}</p>
                    <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-neutral-900">
                        {tender.title}
                    </h3>
                </div>

                <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold ${typeTone[tender.type]}`}>
                        {tender.type}
                    </span>
                    <span
                        className={`inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold ${statusTone[tender.status]
                            }`}
                    >
                        {tender.status}
                    </span>
                </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                        <MapPin className="h-3.5 w-3.5 text-primary-600" />
                        Lieu
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">{tender.location}</p>
                </div>
                <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                        <CalendarDays className="h-3.5 w-3.5 text-secondary-600" />
                        Publié
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">{tender.publishedAt}</p>
                </div>
                <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                        <Clock className="h-3.5 w-3.5 text-primary-600" />
                        Date limite
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-800">{tender.deadline}</p>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-neutral-600">Téléchargez le dossier d’appel d’offre et soumettez votre candidature.</p>

                <Link
                    href={tender.documentsHref ?? "#"}
                    className="relative inline-flex items-center gap-2 border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700 transition-colors hover:border-primary-300 hover:text-primary-800"
                >
                    Consulter
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
