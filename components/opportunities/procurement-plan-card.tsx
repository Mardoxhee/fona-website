import { CalendarDays } from "lucide-react";
import type { ProcurementPlanItem } from "@/lib/opportunities";

type ProcurementPlanCardProps = {
    item: ProcurementPlanItem;
    className?: string;
};

const typeAccent: Record<ProcurementPlanItem["type"], string> = {
    Travaux: "border-l-primary-600",
    Fournitures: "border-l-secondary-600",
    Services: "border-l-primary-600",
    Consultance: "border-l-secondary-600",
};

export function ProcurementPlanCard({ item, className }: ProcurementPlanCardProps) {
    return (
        <div
            className={
                className ??
                `group relative overflow-hidden border border-neutral-200 bg-white p-5 border-l-4 transition-colors hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-sm ${typeAccent[item.type]
                }`
            }
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                        <span className={`h-2 w-2 rounded-full ${item.type === "Fournitures" || item.type === "Consultance" ? "bg-secondary-600" : "bg-primary-600"}`} />
                        {item.type}
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-700">{item.count} dossier(s)</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
                    <CalendarDays className="h-4 w-4" />
                    {item.period}
                </div>
            </div>

            {item.budgetNote && <p className="mt-3 text-xs text-neutral-600">{item.budgetNote}</p>}
        </div>
    );
}
