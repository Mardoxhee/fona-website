import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { getNewsArticleBySlugApi } from "@/lib/news";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = await getNewsArticleBySlugApi(slug);

    const title = article?.title?.trim() || siteConfig.name;
    const logoUrl = new URL("/logo-fonarev.jpg", siteConfig.url).toString();

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0B4BB2",
                    padding: 72,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <img
                        src={logoUrl}
                        alt={siteConfig.name}
                        width={260}
                        height={80}
                        style={{ objectFit: "contain" }}
                    />
                    <div
                        style={{
                            fontSize: 22,
                            color: "rgba(255,255,255,0.85)",
                            fontWeight: 600,
                        }}
                    >
                        Actualités
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 18,
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 32,
                        padding: 56,
                    }}
                >
                    <div
                        style={{
                            fontSize: 54,
                            lineHeight: 1.1,
                            color: "#FFFFFF",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: "rgba(255,255,255,0.85)",
                            fontWeight: 600,
                        }}
                    >
                        {siteConfig.name}
                    </div>
                </div>

                <div
                    style={{
                        fontSize: 18,
                        color: "rgba(255,255,255,0.75)",
                        fontWeight: 600,
                    }}
                >
                    {siteConfig.url.replace(/^https?:\/\//, "")}
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
