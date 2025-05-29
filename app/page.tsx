'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./components/Header";
import Footer from './components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col font-sans text-black dark:text-white transition-colors duration-500 bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo.png')" }}
    >
      {/* HEADER si decides usarlo */}
      {/* <Header /> */}

      {/* SECCIÓN 1: Descripción de la escuela */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-400">
            Bienvenido a Open Knowledge Academy
          </h1>
          <p className="text-lg leading-relaxed text-black dark:text-white">
          🚀 En Open Knowledge Academy no solo enseñamos, ¡inspiramos! Somos una escuela moderna donde aprender <strong>idiomas</strong> y <strong>programación</strong> se convierte en una aventura emocionante. Combinamos tecnología de punta, métodos interactivos y atención personalizada para que cada estudiante aprenda a su ritmo y con entusiasmo. 💡 Aquí no hay clases aburridas: hay experiencias que transforman. Y sí, nuestros maestros son tan geniales como suena.
         </p>
        </motion.div>
      </section>

      {/* SECCIÓN 2: Video de presentación */}
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            className="flex flex-col gap-4 items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <video
              src="/video-maestro.mp4"
              controls
              className="w-full rounded-xl shadow-lg ring-2 ring-purple-500"
            >
              Tu navegador no soporta el video.
            </video>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full font-semibold text-lg mt-6">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition">📞 Contactar</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:scale-105 transition">📅 Agendar cita</button>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:scale-105 transition">💬 Chatear</button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:scale-105 transition">👨‍🎓 Ver estudiantes</button>
              <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:brightness-110 transition col-span-full sm:col-span-2">✨ Más opciones</button>
            </div>
          </motion.div>
        </main>
      </section>

      {/* SECCIÓN 3: Maestros */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Maestro 1 */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/maestro.jpg"
            alt="Foto del maestro Mauricio Rosales"
            width={200}
            height={200}
            className="rounded-full shadow-2xl object-cover ring-4 ring-blue-400 dark:ring-purple-600"
          />
          <h2 className="text-3xl font-bold text-black dark:text-white">Mauricio Rosales</h2>
          <p className="text-black dark:text-white leading-relaxed">
            🎓 Profesor de idiomas con más de 10 años de experiencia impartiendo clases de <strong>inglés</strong>, <strong>francés</strong> y <strong>alemán</strong>. Ofrezco una enseñanza estructurada, eficaz y adaptada a las necesidades de cada estudiante.
          </p>
        </motion.div>

        {/* Maestro 2 */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/maestrotaylor.jpg"
            alt="Foto del maestro Taylor Gonzales"
            width={200}
            height={200}
            className="rounded-full shadow-2xl object-cover ring-4 ring-blue-400 dark:ring-purple-600"
          />
          <h2 className="text-3xl font-bold text-black dark:text-white">Taylor Gonzalez</h2>
          <p className="text-black dark:text-white leading-relaxed">
            🎓 Profesor de programación con más de 10 años de experiencia formando a estudiantes en distintas tecnologías. Mis clases se caracterizan por ser prácticas, actualizadas y orientadas a resultados reales.
          </p>
        </motion.div>
      </section>
      {/* SECCIÓN 4: Precios y métodos de pago */}
      <section className="bg-white dark:bg-gray-900 w-full py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-400">
              Precios y Métodos de Pago
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Ofrecemos planes flexibles para que elijas el que mejor se adapte a tus necesidades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plan Semanal */}
              <div className="border border-purple-400 dark:border-purple-600 rounded-xl p-6 shadow-md bg-purple-50 dark:bg-gray-800">
                <h3 className="text-2xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Plan Semanal</h3>
                <p className="text-lg mb-4">💰 <strong>$750 MXN</strong> / semana</p>
                <ul className="text-left text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                  <li>✅ Tres clases por semana</li>
                  <li>✅ Material digital incluido</li>
                  <li>✅ Soporte por chat</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pago por transferencia, depósito o tarjeta.</p>
              </div>

              {/* Plan Mensual */}
              <div className="border border-purple-400 dark:border-purple-600 rounded-xl p-6 shadow-md bg-purple-100 dark:bg-gray-800">
                <h3 className="text-2xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Plan Mensual</h3>
                <p className="text-lg mb-4">💰 <strong>$3,000 MXN</strong> / mes</p>
                <ul className="text-left text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                  <li>✅ Todo lo del plan semanal</li>
                  <li>✅ 15% de descuento</li>
                  <li>✅ Clases extra de apoyo</li>
                  <li>✅ Evaluaciones personalizadas</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pago por transferencia, depósito o tarjeta.</p>
              </div>

              {/* Plan Anual */}
              <div className="border border-purple-400 dark:border-purple-600 rounded-xl p-6 shadow-md bg-purple-50 dark:bg-gray-800">
                <h3 className="text-2xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Plan Anual</h3>
                <p className="text-lg mb-4">💰 <strong>$30,000 MXN</strong> / año</p>
                <ul className="text-left text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                  <li>✅ Todo lo del plan mensual</li>
                  <li>✅ 2 meses gratis</li>
                  <li>✅ Acceso prioritario a talleres</li>
                  <li>✅ Acesorias 24/7 </li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pago por transferencia, depósito o tarjeta.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* <footer className="mt-auto w-full border-t border-gray-300 dark:border-gray-700 p-4 text-center text-sm text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-black/70 backdrop-blur">
        © {new Date().getFullYear()} Open Knowledge Academy. Todos los derechos reservados. | Política de privacidad | Términos de uso
      </footer> */}
    </div>
  );
}
