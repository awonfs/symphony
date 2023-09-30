import { cookies } from "next/headers";
import SearchPageForm from "@/components/search-page-form";
import Link from "next/link";

function SearchPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("spotifyToken");

  if (!token) {
    return (
      <div className="container w-full text-center">
        TopTracksPage
        <Link href="/api/login">Login to see your stats</Link>
      </div>
    );
  }
  return (
    <div className="container flex flex-col w-3/4 mt-6 text-center h-screen text-white">
      <SearchPageForm token={token.value} />
    </div>
  );
}

export default SearchPage;
