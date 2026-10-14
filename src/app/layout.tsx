import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.otf", weight: "400" },
    { path: "../fonts/Inter-SemiBold.otf", weight: "600" },
    { path: "../fonts/Inter-Bold.otf", weight: "700" },
    { path: "../fonts/Inter-ExtraBold.otf", weight: "800" },
    { path: "../fonts/Inter-Black.otf", weight: "900" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/jetbrains-mono-latin-700-normal.woff2", weight: "700" },
  ],
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
