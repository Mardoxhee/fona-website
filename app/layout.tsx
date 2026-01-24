import { Barlow_Condensed, Roboto } from "next/font/google";
import { baseMetadata } from "@/lib/metadata";
import { ThemeProvider } from "@/components/providers";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${barlowCondensed.variable} ${roboto.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="fonarev-theme">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-[104px]">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
