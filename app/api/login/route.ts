import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID!!;
  const redirect_uri: string = process.env.NEXT_PUBLIC_REDIRECT_URI!!;
  const scope: string = "user-read-private user-read-email user-top-read";
  const state: string = "L0k1TH3C4TISR34L";

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
