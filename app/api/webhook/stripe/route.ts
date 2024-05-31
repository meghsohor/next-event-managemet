import { createOrder } from "@/lib/actions/order.actions";
import { NextResponse } from "next/server";
import stripe from "stripe";


export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get('stripe-signature') as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({message: 'Webhook Error:', error: err});
  }

  const eventType = event.type;

  if (eventType === 'payment_intent.succeeded') {
    const {id, metadata, amount} = event.data.object;
    // Handle successful payment
    const newOrder = await createOrder({
      stripeId: id,
      totalAmount: amount ? (amount / 100).toFixed(2) : '0',
      eventId: metadata?.eventId || '',
      buyerId: metadata?.buyerId || '',
      createdAt: new Date(),
    });

    return NextResponse.json({message: 'Order created successfully', order: newOrder});
  }

  return NextResponse.json('', { status: 200 });
}
