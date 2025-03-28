'use server';

import { stripe } from '@/app/_lib/stripe';
import { CartProduct } from '@/app/_providers/cart';
import { headers } from 'next/headers';

interface CreateStripeCheckout {
    products: CartProduct[];
}

export const createStripeCheckout = async ({
    products,
}: CreateStripeCheckout) => {
    const headersList = await headers();
    const origin = headersList.get('origin');

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${origin}payment-confirmation?success=true`,
        cancel_url: `${origin}payment-confirmation?canceled=true`,
        line_items: products.map((product) => ({
            price_data: {
                currency: 'brl',
                product_data: {
                    name: product.title,
                    images: [product.image],
                },
                unit_amount:
                    parseFloat(
                        product.price.replace('R$', '').replace(',', '.')
                    ) * 100,
            },
            quantity: product.quantity,
        })),
    });

    return { sessionId: session.id };
};
