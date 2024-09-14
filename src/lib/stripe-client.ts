import {
  loadStripe,
  Stripe,
} from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error("No publishable key found");
    }
    stripePromise = loadStripe(publishableKey);
  }

  return stripePromise;
};
