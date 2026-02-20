import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
    const logoUrl = new URL("/logo-fonarev.jpg", siteConfig.url).toString();

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0B4BB2",
                }}
            >
                <div
                    style={{
                        width: 980,
                        height: 420,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 32,
                        padding: 40,
                    }}
                >
                    <img
                        src={logoUrl}
                        alt={siteConfig.name}
                        width={760}
                        height={240}
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [],
        },
    );
}
