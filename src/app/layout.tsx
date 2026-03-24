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
  title: "Jash Navin Thakkar | Business & AI Growth",
  description:
    "Business development professional with 5+ years of experience in sales, customer acquisition, and operations, now combining AI and data-driven strategies to drive growth.",
  keywords: [
    "Jash Thakkar",
    "business development",
    "AI growth",
    "sales strategy",
    "digital marketing",
    "Barcelona",
    "portfolio",
  ],
  authors: [{ name: "Jash Navin Thakkar" }],
  creator: "Jash Navin Thakkar",
  openGraph: {
    title: "Jash Navin Thakkar | Business & AI Growth",
    description:
      "Business development professional transitioning into AI-driven entrepreneurship.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jash Navin Thakkar | Business & AI Growth",
    description:
      "Business development professional transitioning into AI-driven entrepreneurship.",
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
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
