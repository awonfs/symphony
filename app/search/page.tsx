import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import SearchPageForm from "@/components/search-page-form";
import ArtistCardGrid from "@/components/artist-card-grid";
import Link from "next/link";

function SearchPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("spotifyToken");

  if (!token) {
    return (
      <div className="container flex justify-center mt-32 md:mt-8">
        <Button className="md:w-1/5 py-6 bg-primary-gradient text-xl">
          <Link href="/api/login">Log in to see your stats</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="container flex flex-col md:w-3/4 mt-28 md:mt-6 text-center h-screen text-white">
      <SearchPageForm token={token.value} />
      <ArtistCardGrid />
    </div>
  );
}

export default SearchPage;
