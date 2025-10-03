/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortfolioProject } from "@/types/portfolioProject";
import { Member } from "@/types/member";

const token = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github.v3+json",
};

const fetchInfoJson = async (repoName: string) => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/Lab-Fabrica-de-Software/${repoName}/contents/docs/info.json`,
      { headers, cache: "no-store" } 
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (!data?.content) return null;

    const decoded = Buffer.from(data.content, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
};

const fetchCollaborators = async (repoName: string): Promise<Member[]> => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/Lab-Fabrica-de-Software/${repoName}/collaborators`,
      { headers, cache: "no-store" }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.map((colab: any) => ({
      id: String(colab.id),
      name: colab.login,
      image: colab.avatar_url,
      githubUrl: colab.html_url,
    }));
  } catch {
    return [];
  }
};

export async function fetchPortfolioProjects(perPage: number | undefined, page: number | undefined): Promise<{ data: PortfolioProject[]; error: boolean; }> {
  try {
    const reposRes = await fetch(
      `https://api.github.com/search/repositories?q=org:Lab-Fabrica-de-Software+topic:portfolio${perPage ? `&per_page=${perPage}` : ""}${page ? `&page=${page}` : ""}&sort=updated&order=desc`,
      { headers, cache: "no-store" }
    );

    if (!reposRes.ok) {
      return { data: [], error: true };
    }

    const { items: repos } = await reposRes.json();

    const projects = await Promise.all(
      repos.map(async (repo: any) => {
        const [infoJson, collaborators] = await Promise.all([
          fetchInfoJson(repo.name),
          fetchCollaborators(repo.name),
        ]);

        return {
          id: String(repo.id),
          title: infoJson?.title || repo.name,
          description: infoJson?.description || repo.description || "",
          images: infoJson?.images || [],
          status: infoJson?.status || "in-progress",
          stacks:
            infoJson?.stacks ||
            repo.topics?.filter((stack: string) => stack !== "portfolio") ||
            [],
          links: infoJson?.links || [],
          collaborators,
          repository: repo.html_url,
          homepage: repo.homepage,
          visibility: repo.visibility,
        };
      })
    );

    return { data: projects, error: false };
  } catch {
    return { data: [], error: true };
  }
}