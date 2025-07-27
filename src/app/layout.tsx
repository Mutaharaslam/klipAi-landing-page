import type { Metadata } from "next";
import { Sora, Montserrat, Inter } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Klip Ai | Test",
    template: "%s | Klip Ai",
  },
  description:
    "A modern Next.js 14+ boilerplate with TypeScript and Tailwind CSS",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Boilerplate"],
  authors: [{ name: "MUtahar" }],
  creator: "Muatahr",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Next.js",
    description:
      "A modern Next.js 14+ boilerplate with TypeScript and Tailwind CSS",
    siteName: "Next.js Boilerplate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${montserrat.variable} ${inter.variable} `}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
