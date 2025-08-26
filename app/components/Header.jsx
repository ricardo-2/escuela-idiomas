'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full border-b border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-50">
      {/* Imagen de fondo con overlay */}
      {/* <div className="absolute inset-0 bg-[url('/fondo-escuela2.jpg')] bg-cover bg-center opacity-70 dark:opacity-60"></div> */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-md"></div>

      <div className="relative max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-3xl font-bold text-blue-800 hover:text-yellow-300 transition">
          Open Knowledge Academy
        </Link>

        <nav className="hidden md:flex space-x-6 font-semibold tracking-wide">
          <Link href="/servicios" className="hover:text-blue-600 transition hover:scale-105">Servicios</Link>
          <Link href="/acerca" className="hover:text-blue-600 transition hover:scale-105">Acerca</Link>
          <Link href="/contacto" className="hover:text-blue-600 transition hover:scale-105">Contacto</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative md:hidden mt-2 flex flex-col items-center space-y-2 font-medium pb-4"
        >
          <Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link href="/acerca" onClick={() => setMenuOpen(false)}>Acerca</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </motion.div>
      )}
    </header>
    
  );
}
