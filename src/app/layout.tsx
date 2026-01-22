import type { Metadata } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Carregando todos para garantir
  variable: "--font-poppins", // Essa variável vai pro CSS
});

export const metadata: Metadata = {
  title: "Portfolio - Rangel",
  description: "Criando soluções digitais inovadoras e impactantes.",
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
