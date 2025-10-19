import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Playfair_Display, Work_Sans } from "next/font/google";

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const bodyFont = Work_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Heritage Capital Advisory",
  description:
    "Experiência digital premium para planejar e preservar patrimônios multigeracionais com exclusividade e precisão."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(headingFont.variable, bodyFont.variable)}>
      <body className="min-h-screen bg-background font-[var(--font-body)] text-foreground">
        {children}
      </body>
    </html>
  );
}
