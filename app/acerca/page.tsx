'use client';

import { motion } from 'framer-motion';

export default function Acerca() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 dark:from-black dark:via-gray-900 
    dark:to-gray-800 text-black dark:text-white font-sans transition-colors duration-500 p-6">
      <main className="max-w-4xl mx-auto mt-16">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-blue-800 dark:text-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Acerca de Open Knowledge Academy
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          En <strong>Open Knowledge Academy</strong> creemos en el poder transformador del conocimiento. 
          Somos una institución educativa comprometida con la excelencia y la innovación, fundada por expertos 
          con más de diez años de trayectoria en la enseñanza de idiomas y tecnología.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Nuestra propuesta académica se basa en metodologías activas, recursos multimedia de vanguardia 
          y un enfoque personalizado que coloca al estudiante en el centro del proceso de aprendizaje. 
          Nos apasiona crear experiencias significativas que potencien tanto el pensamiento crítico como la creatividad.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Ya sea que estés comenzando tu formación o buscando perfeccionar tus habilidades, 
          en Open Knowledge Academy encontrarás una comunidad vibrante, un equipo docente apasionado 
          y el acompañamiento necesario para alcanzar tus metas con confianza y visión global.
        </motion.p>
      </main>
    </div>
  );
}
