import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers"; // Import cookies

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    if (!code) throw new Error("Authorization code is missing from callback");

    const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
    const auth = `${process.env.CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
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

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URI}/search`);
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URI}/error`);
  }
}
