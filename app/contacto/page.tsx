'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Header from "../components/Header";



const maestros = [
  {
    nombre: "Mauricio Rosales",
    foto: "/maestro.jpg",
    descripcion: "Profesor de idiomas con más de 10 años enseñando inglés.",
    correo: "mauricio.rosales@email.com",
    redes: {
      facebook: "https://facebook.com/mauriciorosales",
      twitter: "https://twitter.com/mauricioros",
      linkedin: "https://linkedin.com/in/mauriciorosales"
    }
  },
  {
    nombre: "Taylor Gonzalez",
    foto: "/maestrotaylor.jpg",
    descripcion: "Profesor de programación con más de 10 años de experiencia enseñando lenguajes modernos.",
    correo: "taylor.gonzales@email.com",
    redes: {
      facebook: "https://facebook.com/taylorgonzales",
      twitter: "https://twitter.com/taygonz",
      linkedin: "https://linkedin.com/in/taylorgonzales"
    }
  },
  {
  nombre: "Ricardo Rosales",
  foto: "/ceo.jpg",
  descripcion: "Fundador y Director de la Academia. Visionario en el ámbito educativo, creó esta institución con el firme propósito de construir un mundo más preparado, empoderando a las personas a través del conocimiento, la innovación y la formación tecnológica de excelencia.",
  correo: "ricardo.rosales@email.com",
  redes: {
    facebook: "https://facebook.com/ricardorosales",
    twitter: "https://twitter.com/ricardorosales",
    linkedin: "https://linkedin.com/in/ricardorosales"
  }
}


  // Puedes agregar más maestros aquí
];

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-yellow-300">
        Conoce a nuestros maestros
      </h1>
      
      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
        {maestros.map((maestro, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center"
          >
            <Image
              src={maestro.foto}
              alt={`Foto de ${maestro.nombre}`}
              width={150}
              height={150}
              className="mx-auto rounded-full shadow-lg ring-4 ring-blue-400 dark:ring-purple-600 object-cover"
            />
            <h2 className="text-2xl font-bold mt-4">{maestro.nombre}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{maestro.descripcion}</p>
            <div className="mt-4 flex justify-center gap-4 text-xl text-blue-600 dark:text-blue-400">
              <a href={`mailto:${maestro.correo}`} aria-label="Email"><FaEnvelope /></a>
              <a href={maestro.redes.facebook} target="_blank"><FaFacebook /></a>
              <a href={maestro.redes.twitter} target="_blank"><FaTwitter /></a>
              <a href={maestro.redes.linkedin} target="_blank"><FaLinkedin /></a>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{maestro.correo}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
