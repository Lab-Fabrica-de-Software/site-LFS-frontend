// src/lib/hydrateProjects.tsx
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchPortfolioProjects } from "./github/fetchPortfolioProjects";

interface HydrateProjectsProps {
  children: React.ReactNode;
  perPage?: number;
  page?: number;
}

export async function HydrateProjects({
  children,
  perPage,
  page,
}: HydrateProjectsProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["portfolio-projects", { perPage, page }],
    queryFn: async () => {
      const result = await fetchPortfolioProjects(perPage, page);
      return result;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
