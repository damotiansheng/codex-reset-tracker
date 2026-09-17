import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sg",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Codex Reset Tracker — Every usage-limit reset, tracked",
  description:
    "An unofficial tracker of OpenAI Codex usage-limit resets: latest reset, full history timeline, average interval and longest gap between resets.",
  openGraph: {
    title: "Codex Reset Tracker",
    description:
      "How long since the last Codex usage-limit reset? Latest reset, full history and stats.",
    type: "website",
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Reset Tracker",
    description:
      "How long since the last Codex usage-limit reset? Latest reset, full history and stats.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
