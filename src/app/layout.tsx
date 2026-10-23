import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cheatsheets.melkonsimonyan.com"),
  title: {
    default: "Frontend Interview Cheat Sheets: free printable A4 PDFs",
    template: "%s | Frontend Interview Cheat Sheets",
  },
  description:
    "Free printable A4 cheat sheets for frontend interviews: Web Fundamentals, JavaScript, TypeScript, React and more. One page, one topic: tables, code and the traps interviewers love.",
  keywords: [
    "frontend interview",
    "cheat sheet",
    "JavaScript interview questions",
    "TypeScript cheat sheet",
    "React interview",
    "web fundamentals",
    "printable PDF",
  ],
  authors: [{ name: "Melkon Simonyan", url: "https://www.linkedin.com/in/melkon-simonyan/" }],
  creator: "Melkon Simonyan",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Frontend Interview Cheat Sheets",
    description: "Free printable A4 cheat sheets: tables, code and traps. One page, one topic.",
    url: "/",
    siteName: "Frontend Interview Cheat Sheets",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Frontend Interview Cheat Sheets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Interview Cheat Sheets",
    description: "Free printable A4 cheat sheets: tables, code and traps. One page, one topic.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
    >
      <body>
        <div className="bg"></div>
        {children}
      </body>
    </html>
  );
}
