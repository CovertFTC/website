import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealScripts from "@/components/RevealScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Covert Robotics — FTC Team",
    template: "%s — Covert Robotics",
  },
  description:
    "Covert Robotics is a student-led FIRST Tech Challenge team building competitive robots and future engineers.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Chakra+Petch:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealScripts />
      </body>
    </html>
  );
}
