"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import BoardCard, { BoardCardSkeleton } from "./board-card";
import EmptyBoard from "./EmptyBoard";
import EmptyFavorites from "./EmptyFavorites";
import EmptySearch from "./EmptySearch";
import NewBoardButton from "./NewBoardButton";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export default function BoardList({ orgId, query }: BoardListProps) {
  const data = useQuery(api.boards.getBoards, { orgId, ...query });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorites Boards" : "Team Boards"}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:max-lg:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          <BoardCardSkeleton />
          <BoardCardSkeleton />
          <BoardCardSkeleton />
          <BoardCardSkeleton />
          <BoardCardSkeleton />
          <BoardCardSkeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoard />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorites Boards" : "Team Boards"}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:max-lg:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
