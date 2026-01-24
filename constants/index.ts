// Constantes globales de l'application

export const APP_NAME = "Fonarev";
export const APP_VERSION = "0.1.0";

// Routes
export const ROUTES = {
    HOME: "/",
    SERVICES: "/services",
    ABOUT: "/about",
    CONTACT: "/contact",
    LEGAL: "/legal",
    PRIVACY: "/privacy",
    TERMS: "/terms",
} as const;

// Breakpoints (en pixels)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    "2XL": 1536,
} as const;

// Durées d'animation (en ms)
export const ANIMATION_DURATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
} as const;

// Messages d'erreur
export const ERROR_MESSAGES = {
    GENERIC: "Une erreur est survenue. Veuillez réessayer.",
    NETWORK: "Erreur de connexion. Vérifiez votre connexion internet.",
    NOT_FOUND: "La ressource demandée n'existe pas.",
    UNAUTHORIZED: "Vous n'êtes pas autorisé à effectuer cette action.",
} as const;

// Messages de succès
export const SUCCESS_MESSAGES = {
    CONTACT_SENT: "Votre message a été envoyé avec succès.",
    SAVED: "Les modifications ont été enregistrées.",
} as const;
