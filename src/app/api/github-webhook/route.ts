import { revalidatePath } from "next/cache";
import crypto from "crypto"

async function verifySignature(req: Request, secret: string) {
  const signature = req.headers.get("x-hub-signature-256") || "";
  const body = await req.text();

  const hmac = crypto.createHmac("sha256", secret);
  const digest = `sha256=${hmac.update(body).digest("hex")}`;

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))
    ? body
    : null;
}

export async function POST(req: Request) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const body = await verifySignature(req, secret);
  if (!body) {
    return new Response("Invalid signature", { status: 401 });
  }

  const payload = JSON.parse(body);

  if (payload?.repository?.topics?.includes("portfolio")) {
    revalidatePath("/");
  }

  return new Response("OK", { status: 200 });
}
