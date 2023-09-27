// app/api/login/route.ts
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID!!;
  const redirect_uri: string = "http://localhost:3000/api/callback"; // Your callback route
  const scope: string = "user-read-private user-read-email"; // Your requested scopes
  const state: string = "someRandomState"; // A random string for state

  const queryParams: string = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state,
  }).toString();

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${queryParams}`
  );
}
