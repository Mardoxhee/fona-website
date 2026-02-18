"use client";

import * as React from "react";

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: `#${string}`;
}

export function AnchorLink({ href, onClick, ...props }: AnchorLinkProps) {
    return (
        <a
            href={href}
            onClick={(e) => {
                onClick?.(e);
                if (e.defaultPrevented) return;

                const id = href.slice(1);
                const target = document.getElementById(id);
                if (!target) return;

                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });

                if (typeof window !== "undefined") {
                    window.history.pushState(null, "", href);
                }
            }}
            {...props}
        />
    );
}
