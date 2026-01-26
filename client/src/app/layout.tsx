import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CafeTom",
  description: "Find a cafe for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <div className="m-auto text-align">
          <Toaster />
          <Sonner />
          <main
            className={`${inter.className} antialiased`}
          >
            {children}
          </main>
          <Footer />
          
        </div>
        <Analytics />
      </body>
    </html>
  );
}
