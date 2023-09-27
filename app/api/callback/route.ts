// app/api/callback/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers"; // Import cookies

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    if (!code) throw new Error("Authorization code is missing from callback");

    const redirect_uri = "http://localhost:3000/api/callback";
    const auth = `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`;
    const basicAuth = Buffer.from(auth).toString("base64");

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        params: {
          code,
          grant_type: "authorization_code",
          redirect_uri,
        },
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = response.data;

    // Set the token in httpOnly cookie
    cookies().set("spotifyToken", access_token, { httpOnly: true });

    return NextResponse.redirect("http://localhost:3000/search");
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.redirect("http://localhost:3000/error");
  }
}