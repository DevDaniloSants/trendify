import { stripe } from '@/app/_lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const signature = req.headers.get('stripe-signature');

    if (!signature) return NextResponse.error();

    const text = await req.text();
    stripe.webhooks.constructEvent(
        text,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET_KEY!
    );
}
