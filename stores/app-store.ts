import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Types pour le store
interface AppState {
    // État du thème
    theme: "light" | "dark" | "system";
    setTheme: (theme: "light" | "dark" | "system") => void;

    // État du menu mobile
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (isOpen: boolean) => void;
    toggleMobileMenu: () => void;

    // État de chargement global
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;

    // Notifications/Toasts
    notifications: Notification[];
    addNotification: (notification: Omit<Notification, "id">) => void;
    removeNotification: (id: string) => void;
    clearNotifications: () => void;
}

interface Notification {
    id: string;
    type: "success" | "error" | "warning" | "info";
    title: string;
    message?: string;
    duration?: number;
}

// Générateur d'ID unique
const generateId = () => Math.random().toString(36).substring(2, 9);

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            // Thème
            theme: "system",
            setTheme: (theme) => set({ theme }),

            // Menu mobile
            isMobileMenuOpen: false,
            setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
            toggleMobileMenu: () =>
                set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

            // Chargement
            isLoading: false,
            setLoading: (isLoading) => set({ isLoading }),

            // Notifications
            notifications: [],
            addNotification: (notification) =>
                set((state) => ({
                    notifications: [
                        ...state.notifications,
                        { ...notification, id: generateId() },
                    ],
                })),
            removeNotification: (id) =>
                set((state) => ({
                    notifications: state.notifications.filter((n) => n.id !== id),
                })),
            clearNotifications: () => set({ notifications: [] }),
        }),
        {
            name: "fonarev-app-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                theme: state.theme,
            }),
        }
    )
);
