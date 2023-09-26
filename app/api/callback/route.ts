import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url, "http://localhost"); // Base is added to avoid error with relative URL
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || state === null) {
    return NextResponse.redirect(
      "/#" +
        new URLSearchParams({
          error: "state_mismatch or code_missing",
        })
    );
  }

  const client_id: string = "YOUR_CLIENT_ID";
  const client_secret: string = "YOUR_CLIENT_SECRET";
  const redirect_uri: string = "http://localhost:3000/api/callback";

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code as string,
        redirect_uri,
      }).toString(),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error in token exchange", error);
    return NextResponse.error({ status: 500 });
  }
}
