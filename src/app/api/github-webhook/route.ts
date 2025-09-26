import { revalidatePath, revalidateTag } from "next/cache";
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

  const event = req.headers.get("x-github-event");
  if (event !== "push" && event !== "repository") {
    return new Response("Event not handled", { status: 200 });
  }

  const payload = JSON.parse(body);

  const topicsBefore: string[] = payload?.changes?.topics?.from || [];
  const topicsAfter: string[] = payload?.repository?.topics || [];

  const hadPortfolioBefore = topicsBefore.includes("portfolio");
  const hasPortfolioNow = topicsAfter.includes("portfolio");

  const isPortfolioProject = hadPortfolioBefore || hasPortfolioNow;
  const pushedToMain = event === "push" && payload?.ref === "refs/heads/main";
  const isRepositoryEvent = event === "repository";

  if (isPortfolioProject && (pushedToMain || isRepositoryEvent)) {
    revalidateTag("portfolio-projects");
    revalidatePath("/");

    return new Response("Revalidating portfolio projects", { status: 200 });
  }

  return new Response("Nothing changed", { status: 200 });
}
