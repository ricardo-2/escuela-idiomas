// pages/api/checkout/plan-semanal.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: 'Plan Mensual',
              description: 'Tres clases por semana + material y soporte',
            },
            unit_amount: 300000, // en centavos => $750.00 MXN
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });

    res.redirect(303, session.url!);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear la sesión de pago' });
  }
}
