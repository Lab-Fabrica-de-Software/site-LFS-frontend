import { fetchPortfolioProjects } from "@/lib/github/fetchPortfolioProjects";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await fetchPortfolioProjects();
        return NextResponse.json(data);
    } catch {
       return NextResponse.json({ data: [] }, { status: 500 }); 
    }
}
