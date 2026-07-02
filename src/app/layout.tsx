import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jash Navin Thakkar | Business Development • Strategic Partnerships • AI-Enabled Growth",
  description:
    "Business Development professional with 5+ years of experience across B2B sales, client acquisition, partnerships, and entrepreneurship, now combining AI and data-driven strategies to drive growth.",
  keywords: [
    "Jash Thakkar",
    "business development",
    "strategic partnerships",
    "AI website development",
    "Generative AI",
    "AI growth",
    "sales strategy",
    "digital marketing",
    "Navi Mumbai",
    "portfolio",
  ],
  authors: [{ name: "Jash Navin Thakkar" }],
  creator: "Jash Navin Thakkar",
  openGraph: {
    title: "Jash Navin Thakkar | Business Development • Strategic Partnerships • AI-Enabled Growth",
    description:
      "Business Development professional with 5+ years of experience across B2B sales, client acquisition, partnerships, and entrepreneurship.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jash Navin Thakkar | Business Development • Strategic Partnerships • AI-Enabled Growth",
    description:
      "Business Development professional with 5+ years of experience across B2B sales, client acquisition, partnerships, and entrepreneurship.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen antialiased bg-[#050505] text-[#f3f4f6]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={true}
        >
          <LanguageProvider>
            {children}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Jash Navin Thakkar",
                  "jobTitle": "Business Development & Strategic Partnership Specialist",
                  "url": "https://jash-portfolio.vercel.app",
                  "email": "thakkar.j2812@gmail.com",
                  "telephone": "+919819241893",
                  "sameAs": [
                    "https://www.linkedin.com/in/jash-thakkar-955573400"
                  ],
                  "knowsAbout": [
                    "Business Development",
                    "Strategic Partnerships",
                    "AI-assisted Website Development",
                    "Generative AI",
                    "B2B Sales"
                  ]
                })
              }}
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
