/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortfolioProject } from "@/types/portfolioProject";
import { Member } from "@/types/member";
import axios from "axios";
import { unstable_cache } from "next/cache";

const token = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github.v3+json",
};

const fetchInfoJson = async (repoName: string) => {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/Lab-Fabrica-de-Software/${repoName}/contents/info.json`,
      { headers }
    );

    const content = res.data?.content;
    if (!content) return null;

    const decoded = Buffer.from(content, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
};

const fetchCollaborators = async (repoName: string): Promise<Member[]> => {
  try {
    const res = await axios.get(
      `https://api.github.com/repos/Lab-Fabrica-de-Software/${repoName}/collaborators`,
      { headers }
    );

    return res.data.map((colab: any) => ({
      id: String(colab.id),
      name: colab.login,
      image: colab.avatar_url,
      githubUrl: colab.html_url,
    }));
  } catch {
    return [];
  }
};

export const fetchPortfolioProjects = unstable_cache(
  async (): Promise<{ data: PortfolioProject[]; error: boolean }> => {
    try {
      const reposRes = await axios.get(
        "https://api.github.com/search/repositories?q=org:Lab-Fabrica-de-Software+topic:portfolio",
        { headers }
      );

      const repos = reposRes.data.items;

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
              repo.topics.filter((stack: string) => stack !== "portfolio") ||
              [],
            links: infoJson?.links || [],
            collaborators,
            repository: repo.html_url,
            homepage: repo.homepage,
            visibility: repo.user_view_type,
          };
        })
      );

      return { data: projects, error: false };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return { data: [], error: true };
    }
  },
  ['portfolio-projects'], 
  {
    tags: ['portfolio-projects'],
    revalidate: 3600,
  }
);