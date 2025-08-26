import { NextResponse } from "next/server";
import Stripe from "stripe";

// // Cargar .env en desarrollo
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

// Cargar variables de entorno
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY_TEST;
const SITE_URL = process.env.NEXT_PUBLIC_URL;

if (!STRIPE_KEY || !SITE_URL) {
  throw new Error("Faltan variables de entorno requeridas");
}

// Inicializa Stripe
const stripe = new Stripe(STRIPE_KEY);

export async function POST() {
  try {
    const prices = await stripe.prices.list();
    console.log(prices);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: "Plan Semanal",
              description: "Tres clases por semana",
            },
            unit_amount: 75000,
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:3000/gracias`,
      cancel_url: `http://localhost:3000/cancelado`,
      //  success_url: `${SITE_URL}/gracias`,
      // cancel_url: `${SITE_URL}/cancelado`,
    });
    console.log(session);
    

    return NextResponse.redirect(session.url!, 303);
  } catch (error) {
    console.error("Error al crear sesión de Stripe:", error);
    return NextResponse.json({ error: "Error al crear la sesión" }, { status: 500 });
  }
}
