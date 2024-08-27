"use client";

import EmptyBoard from "./EmptyBoard";
import EmptyFavorites from "./EmptyFavorites";
import EmptySearch from "./EmptySearch";

interface BoardListProps {
  ordId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export default function BoardList({ ordId, query }: BoardListProps) {
  const data = []; // TODO: Fetch data from API

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoard />;
  }

  return <div>BoardList</div>;
}
