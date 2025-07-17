import { NextRequest, NextResponse } from "next/server";

// Mock data for voices
const voicesData = [
  // English Voices
  { name: "Emma Watson", language: "english" },
  { name: "Morgan Freeman", language: "english" },
  { name: "Scarlett Johansson", language: "english" },
  { name: "Tom Hanks", language: "english" },
  { name: "Jennifer Lawrence", language: "english" },
  { name: "Leonardo DiCaprio", language: "english" },
  { name: "Meryl Streep", language: "english" },
  { name: "Brad Pitt", language: "english" },
  { name: "Angelina Jolie", language: "english" },
  { name: "Johnny Depp", language: "english" },

  // Nepali Voices
  { name: "Narayan Gopal", language: "nepali" },
  { name: "Ambar Gurung", language: "nepali" },
  { name: "Tara Devi", language: "nepali" },
  { name: "Kumar Basnet", language: "nepali" },
  { name: "Sabin Rai", language: "nepali" },
  { name: "Deepak Bajracharya", language: "nepali" },
  { name: "Nepathya", language: "nepali" },
  { name: "Phiroj Shyangden", language: "nepali" },
  { name: "Adrian Pradhan", language: "nepali" },
  { name: "Swoopna Suman", language: "nepali" },

  // Indian Voices
  { name: "Amitabh Bachchan", language: "indian" },
  { name: "Lata Mangeshkar", language: "indian" },
  { name: "Shah Rukh Khan", language: "indian" },
  { name: "Aishwarya Rai", language: "indian" },
  { name: "Priyanka Chopra", language: "indian" },
  { name: "Deepika Padukone", language: "indian" },
  { name: "Ranbir Kapoor", language: "indian" },
  { name: "Alia Bhatt", language: "indian" },
  { name: "Aamir Khan", language: "indian" },
  { name: "Kajol", language: "indian" },
];

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
    let filteredVoices = voicesData;

    if (language !== "all") {
      filteredVoices = filteredVoices.filter(
        (voice) => voice.language === language,
      );
    }

    if (search) {
      filteredVoices = filteredVoices.filter((voice) =>
        voice.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedVoices = filteredVoices.slice(startIndex, endIndex);

    const totalVoices = filteredVoices.length;
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
