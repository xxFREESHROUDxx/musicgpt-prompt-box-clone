import { VOICES_DATA } from "@/constants/static-contents";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "8");
    const language = searchParams.get("language") || "all";
    const search = searchParams.get("search") || "";

    // Filter voices based on language and search
    let filteredVoices = VOICES_DATA;

    if (language !== "all") {
      filteredVoices = filteredVoices?.filter(
        (voice) => voice?.language === language,
      );
    }

    if (search) {
      filteredVoices = filteredVoices?.filter((voice) =>
        voice?.name?.toLowerCase()?.includes(search?.toLowerCase()),
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedVoices = filteredVoices?.slice(startIndex, endIndex);

    const totalVoices = filteredVoices?.length;
    const totalPages = Math.ceil(totalVoices / limit);

    return NextResponse.json({
      voices: paginatedVoices,
      pagination: {
        currentPage: page,
        totalPages,
        totalVoices,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch voices" },
      { status: 500 },
    );
  }
}
