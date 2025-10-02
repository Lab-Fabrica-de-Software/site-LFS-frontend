// src/lib/hydrateProjects.tsx
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

async function fetchProjectsSSR() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store",
  });
  return res.json();
}

export async function HydrateProjects({ children }: { children: React.ReactNode }) {
  const getQueryClient = new QueryClient();

  await getQueryClient.prefetchQuery({
    queryKey: ["portfolio-projects"],
    queryFn: fetchProjectsSSR,
  });

  return (
    <HydrationBoundary state={dehydrate(getQueryClient)}>
      {children}
    </HydrationBoundary>
  );
}