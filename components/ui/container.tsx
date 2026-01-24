import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function Container({
    children,
    size = "xl",
    className,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                {
                    "max-w-xl": size === "sm",
                    "max-w-3xl": size === "md",
                    "max-w-5xl": size === "lg",
                    "max-w-7xl": size === "xl",
                    "max-w-[1536px]": size === "2xl",
                    "max-w-full": size === "full",
                },
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
