import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Méthode non autorisée");
  }

  const { cart, promoCode } = req.body;

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const discountedTotal = promoCode === "EURAL10" ? (total * 0.9).toFixed(2) : total.toFixed(2);

  const checkoutLink = `https://pay.sumup.com/b2c/QO6V1ZGH?amount=${discountedTotal}`;

  res.status(200).json({ checkout_url: checkoutLink });
}
