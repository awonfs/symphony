"use client";
import { useGetTopTracks } from "@/lib/hooks/useGetTopTracks";

function TopTracks({ token }: { token: string }) {
  const { data, error, isLoading } = useGetTopTracks(token);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="flex flex-col items-start bg-purple-700 shadow-inner drop-shadow-2xl opacity-80 rounded-lg p-4 mt-4">
      <div className="w-1/2">
        {data?.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-2 text-start bg-purple-600 text-lime-300 shadow-inner drop-shadow-2xl rounded-xl px-4 py-2 w-3/4 overflow-scroll"
          >
            <div className="text-2xl font-bold mr-2">{index + 1}.</div>
            <div className="flex flex-col">
              <span className=" text-lime-300 font-semibold text-xl">
                {item.name}
              </span>
              <span className="text-slate-300 text-sm">
                {item.artists[0].name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTracks;
