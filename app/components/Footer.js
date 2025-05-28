// components/Footer.js
'use client';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-300 dark:border-gray-700 p-4 text-center text-sm text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-black/70 backdrop-blur">
      © {new Date().getFullYear()} Open Knowledge Academy. Todos los derechos reservados. |{" "}
      <a href="/privacidad" className="underline hover:text-black dark:hover:text-white">Política de privacidad</a> |{" "}
      <a href="/terminos" className="underline hover:text-black dark:hover:text-white">Términos de uso</a>
    </footer>
  );
}
