'use client'

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Precios() {
  const handleCheckout = async (planName, amount) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planName, amount }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error al generar el pago.');
      }
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error inesperado.');
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 w-full py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-700">
            Precios y Métodos de Pago
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Ofrecemos planes flexibles para que elijas el que mejor se adapte a tus necesidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Semanal */}
            <div className="border border-purple-400 dark:border-purple-600 rounded-xl p-6 shadow-md bg-blue-50 dark:bg-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Plan Semanal</h3>
              <p className="text-lg mb-4">💰 <strong>$750 MXN</strong> / semana</p>
              <ul className="text-left text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                <li>✅ Tres clases por semana</li>
                <li>✅ Material digital incluido</li>
                <li>✅ Soporte por chat</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pago por transferencia, depósito o tarjeta.</p>
              <button
                onClick={() => handleCheckout('Plan Semanal', 750)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Pagar con tarjeta
              </button>
            </div>

            {/* Plan Mensual */}
            <div className="border border-purple-400 dark:border-purple-600 rounded-xl p-6 shadow-md bg-purple-100 dark:bg-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Plan Mensual</h3>
              <p className="text-lg mb-4">💰 <strong>$3,000 MXN</strong> / mes</p>
              <ul className="text-left text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                <li>✅ Todo lo del plan semanal</li>
                <li>✅ 15% de descuento</li>
                <li>✅ Clases extra de apoyo</li>
                <li>✅ Evaluaciones personalizadas</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pago por transferencia, depósito o tarjeta.</p>
              <button
                onClick={() => handleCheckout('Plan Mensual', 3000)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Pagar con tarjeta
              </button>
            </div>

            {/* Plan Anual */}
            <div className="border border-purple-400 dark:border-purple-600 rounded-xl p-6 shadow-md bg-purple-50 dark:bg-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Plan Anual</h3>
              <p className="text-lg mb-4">💰 <strong>$30,000 MXN</strong> / año</p>
              <ul className="text-left text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                <li>✅ Todo lo del plan mensual</li>
                <li>✅ 2 meses gratis</li>
                <li>✅ Acceso prioritario a talleres</li>
                <li>✅ Asesorías 24/7 </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pago por transferencia, depósito o tarjeta.</p>
              <button
                onClick={() => handleCheckout('Plan Anual', 30000)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Pagar con tarjeta
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
