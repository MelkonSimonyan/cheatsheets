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
  title: "Frontend Interview Cheat Sheets",
  description: "One page, one frontend topic: tables, code and the traps interviewers love.",
  openGraph: {
    title: "Frontend Interview Cheat Sheets",
    description: "Tables, code and traps. One page, one topic, every day.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Frontend Interview Cheat Sheets" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
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
