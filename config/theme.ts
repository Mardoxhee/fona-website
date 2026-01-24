// Configuration du thème - Couleurs et design tokens

export const themeConfig = {
    colors: {
        // Couleurs principales - Bleu Fonarev #007EBA
        primary: {
            50: "#e6f4fa",
            100: "#cce9f5",
            200: "#99d3eb",
            300: "#66bde1",
            400: "#33a7d7",
            500: "#007EBA",
            600: "#006a9e",
            700: "#005682",
            800: "#004166",
            900: "#002d4a",
            950: "#001a2e",
        },
        // Couleurs secondaires - Magenta Fonarev #A5127F
        secondary: {
            50: "#fdf2f9",
            100: "#fbe6f3",
            200: "#f5cce5",
            300: "#ed99cc",
            400: "#d94da8",
            500: "#A5127F",
            600: "#8c0f6c",
            700: "#730c59",
            800: "#5a0946",
            900: "#410633",
            950: "#280320",
        },
        // Couleurs d'accent
        accent: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407",
        },
        // Couleurs neutres
        neutral: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0a0a0a",
        },
        // États
        success: "#22c55e",
        warning: "#eab308",
        error: "#ef4444",
        info: "#3b82f6",
    },
    fonts: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
    },
    borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
    },
    spacing: {
        container: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
} as const;

export type ThemeConfig = typeof themeConfig;
