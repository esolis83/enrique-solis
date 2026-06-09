export const ecommerceCheckout = {
  title: 'E-Commerce Checkout Flow',
  description: 'Handling secure payment processing with Stripe integration',
  language: 'javascript',
  code: `// Checkout handler with Stripe integration
const handleCheckout = async (cartItems) => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cartItems,
        email: userEmail
      })
    });

    const { sessionId } = await response.json();
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Checkout error:', error);
  }
};`
};
