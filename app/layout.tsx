import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/socialMedia";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcos Dionel",
  description: "Entrenamientos 100% personalizados de musculación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
        <SocialMedia/>
        {children}
      </body>
    </html>
  );
}
