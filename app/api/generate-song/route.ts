import { NextRequest, NextResponse } from "next/server";

export interface SongGenerationRequest {
  prompt: string;
  type?: string;
  lyrics?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SongGenerationRequest = await request.json();

    // eslint-disable-next-line no-console
    console.log("Song Generation Request:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // Simulate api processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Here you would implement the actual song generation logic
    // For now, we'll return a success response

    return NextResponse.json({
      success: true,
      message: "Song generation request received",
      data: {
        id: `song_${Date.now()}`,
        type: body.type,
        prompt: body.prompt,
        lyrics: body.lyrics,
        status: "processing",
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error in song generation:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process song generation request",
      },
      { status: 500 },
    );
  }
}
