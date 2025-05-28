'use client';

import { FaChalkboardTeacher, FaLaptopCode, FaBookOpen, FaUserGraduate } from "react-icons/fa";
import Header from "../components/Header";
//import Footer from './components/Footer';

export default function Servicios() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-900 dark:text-white px-6 py-12"
      style={{ backgroundImage: "url('/fondo-servicios.jpg')" }} // Asegúrate que la imagen esté en /public
    >
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-700 dark:text-purple-400">
          Servicios Estudiantiles
        </h1>
        <p className="text-center mb-10 text-lg text-gray-700 dark:text-gray-300">
          Apoyamos a estudiantes con recursos, orientación y herramientas para su desarrollo académico y profesional.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Servicio 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105">
            <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Asesorías Académicas</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Clases personalizadas en matemáticas, ciencias, lenguas y más, adaptadas a tus necesidades.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105">
            <FaLaptopCode className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Proyectos y Tareas</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Apoyo con la elaboración de tareas, ensayos, exposiciones y proyectos técnicos o creativos.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105">
            <FaBookOpen className="text-4xl text-orange-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Recursos Educativos</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Accede a guías de estudio, resúmenes, libros digitales y más contenido útil.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105">
            <FaUserGraduate className="text-4xl text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Orientación Vocacional</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Te ayudamos a descubrir tu vocación y planificar tu futuro académico y profesional.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contacto" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
            Contáctanos
          </a>
        </div>
        
      </div>
      
    </main>

  );
}
