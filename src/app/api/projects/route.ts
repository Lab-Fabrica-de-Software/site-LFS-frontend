import { fetchPortfolioProjects } from "@/lib/github/fetchPortfolioProjects";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const perPage = Number(searchParams.get("per_page")) || 3;
    const page = Number(searchParams.get("page")) || 1;

    const projects = await fetchPortfolioProjects(perPage, page);

    return NextResponse.json({
      data: projects,
      error: false,
    });
  } catch (err) {
    console.error("Erro em /api/projects:", err);
    return NextResponse.json(
      {
        data: [],
        error: true,
      },
      { status: 500 }
    );
  }
}
