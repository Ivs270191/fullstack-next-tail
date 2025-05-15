import axios from "axios";
import crypto from "crypto";

interface Props {
  description: string;
  orderId: number;
  amount: number;
}

export async function createPayment(details: Props) {
  const publicKey = "sandbox_i54988134538";
  const privateKey = "sandbox_xPNonFBDRmArpfNnWtuu2Bj6lZD1gLtfRoJWN6vG";

  const requestData = {
    version: 3,
    public_key: publicKey,
    action: "pay",
    amount: details.amount,
    currency: "UAH",
    description: details.description,
    order_id: details.orderId,
  };

  const data = Buffer.from(JSON.stringify(requestData)).toString("base64");

  const signature = crypto
    .createHash("sha1")
    .update(privateKey + data + privateKey)
    .digest("base64");
  const response = await axios.post("https://www.liqpay.ua/api/3/checkout", {
    data,
    signature,
  });

  return response.data;
}
