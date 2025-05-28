import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer"; // 👈 Aquí lo importas

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Knowledge Academy",
  description: "Página oficial de Open Knowledge Academy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[url('/fondo-escuela.jpg')] bg-cover bg-center bg-fixed text-black dark:text-white font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* 👈 Aquí se renderiza el Footer */}
      </body>
    </html>
  );
}
