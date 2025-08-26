import { Stripe } from 'stripe';
import { NextResponse } from 'next/server';

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST, {
    apiVersion: '2024-04-10',
  });

  const prices = await stripe.prices.list();
  console.log(prices);

  return NextResponse.json({
    message: "hello",
    prices,
  });
}
