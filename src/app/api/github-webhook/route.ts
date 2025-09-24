import { revalidateTag } from "next/cache";
import crypto from "crypto";

async function verifySignature(req: Request, secret: string) {
  const signature = req.headers.get("x-hub-signature-256") || "";
  const body = await req.text();

  const hmac = crypto.createHmac("sha256", secret);
  const digest = `sha256=${hmac.update(body).digest("hex")}`;

  if (signature.length !== digest.length) {
    console.error("Signature length mismatch", { signature, digest });
    return null;
  }

  const match = crypto.timingSafeEqual(
    Buffer.from(signature, "utf8"),
    Buffer.from(digest, "utf8")
  );

  if (!match) {
    console.error("Signature mismatch", { signature, digest, body });
    return null;
  }

  return body;
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
    revalidateTag('portfolio-projects');
  }

  return new Response("OK", { status: 200 });
}
