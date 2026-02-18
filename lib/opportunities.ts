export type TenderType = "Travaux" | "Fournitures" | "Services" | "Consultance";

export type TenderStatus = "Ouvert" | "Bientôt" | "Clôturé";

export type Tender = {
    id: string;
    title: string;
    ref?: string;
    type: TenderType;
    location: string;
    deadline: string;
    publishedAt: string;
    status: TenderStatus;
    documentsHref?: string;
};

export type ProcurementPlanItem = {
    id: string;
    type: TenderType;
    count: number;
    period: string;
    budgetNote?: string;
};

export const tenders: Tender[] = [
    {
        id: "ao-1",
        title: "Acquisition de kits d’assistance pour la prise en charge des survivantes",
        ref: "AO/FONAREV/2026/001",
        type: "Fournitures",
        location: "Kananga, RDC",
        deadline: "20 Fév 2026",
        publishedAt: "05 Fév 2026",
        status: "Ouvert",
        documentsHref: "#",
    },
    {
        id: "ao-2",
        title: "Recrutement d’un cabinet pour l’audit organisationnel et financier",
        ref: "AO/FONAREV/2026/002",
        type: "Consultance",
        location: "Kinshasa, RDC",
        deadline: "28 Fév 2026",
        publishedAt: "08 Fév 2026",
        status: "Ouvert",
        documentsHref: "#",
    },
    {
        id: "ao-3",
        title: "Travaux de réhabilitation d’un centre d’accueil et d’orientation",
        ref: "AO/FONAREV/2026/003",
        type: "Travaux",
        location: "Goma, RDC",
        deadline: "12 Mar 2026",
        publishedAt: "10 Fév 2026",
        status: "Bientôt",
        documentsHref: "#",
    },
    {
        id: "ao-4",
        title: "Prestations de services de communication (campagnes et contenus)",
        ref: "AO/FONAREV/2026/004",
        type: "Services",
        location: "RDC",
        deadline: "15 Mar 2026",
        publishedAt: "10 Fév 2026",
        status: "Ouvert",
        documentsHref: "#",
    },
    {
        id: "ao-5",
        title: "Fourniture de matériel informatique et licences",
        ref: "AO/FONAREV/2026/005",
        type: "Fournitures",
        location: "Kinshasa, RDC",
        deadline: "01 Mar 2026",
        publishedAt: "01 Fév 2026",
        status: "Clôturé",
        documentsHref: "#",
    },
];

export const procurementPlan: ProcurementPlanItem[] = [
    {
        id: "ppm-1",
        type: "Travaux",
        count: 4,
        period: "T1–T2 2026",
        budgetNote: "Réhabilitation & aménagement",
    },
    {
        id: "ppm-2",
        type: "Fournitures",
        count: 7,
        period: "T1 2026",
        budgetNote: "Kits, équipements, IT",
    },
    {
        id: "ppm-3",
        type: "Services",
        count: 5,
        period: "T1–T3 2026",
        budgetNote: "Logistique & communication",
    },
    {
        id: "ppm-4",
        type: "Consultance",
        count: 3,
        period: "T2 2026",
        budgetNote: "Audit, études, accompagnement",
    },
];
