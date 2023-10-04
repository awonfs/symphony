interface Item {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
}

interface TopTrackListItemProps {
  item: Item;
  rank: number;
}

function TopTrackListItem({ item, rank }: TopTrackListItemProps) {
  return (
    <div className="relative z-10 flex flex-col w-full md:w-1/2">
      <div className="flex items-center mb-2 text-start bg-purple-600 text-lime-300 shadow-inner drop-shadow-2xl rounded-xl px-4 py-2 w-3/4 overflow-hidden">
        <div className="text-3xl font-bold mr-4 drop-shadow-2xl">
          {rank + 1}
        </div>
        <div className="flex flex-col">
          <span className="text-lime-300 font-semibold text-xl">
            {item.name}
          </span>
          <span className="text-slate-300 text-sm">{item.artists[0].name}</span>
        </div>
      </div>
    </div>
  );
}

export default TopTrackListItem;
