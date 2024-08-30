import { getAllOrThrow } from "convex-helpers/server/relationships";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export const getBoards = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorites: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    if (args.favorites) {
      const userId = identity.subject;

      const favoritedBoards = await ctx.db
        .query("userFavorites")
        .withIndex("by_user_org", (q) =>
          q.eq("userId", userId).eq("orgId", args.orgId),
        )
        .order("desc")
        .collect();

      const boardIds = favoritedBoards.map((favorite) => favorite.boardId);

      const boards = await getAllOrThrow(ctx.db, boardIds as Id<"boards">[]);

      return boards.map((board) => ({
        ...board,
        isFavorite: true,
      }));
    }

    const title = args.search as string;
    let boards = [];

    if (title) {
      boards = await ctx.db
        .query("boards")
        .withSearchIndex("search_title", (q) =>
          q.search("title", title).eq("orgId", args.orgId),
        )
        .collect();
    } else {
      boards = await ctx.db
        .query("boards")
        .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
        .order("desc")
        .collect();
    }

    const boardsWithFavorites = boards.map(async (board) => {
      const userId = identity.subject;

      const favorite = await ctx.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) =>
          q.eq("userId", userId).eq("boardId", board._id),
        )
        .unique();

      return {
        ...board,
        isFavorite: !!favorite,
      };
    });

    const boardsWithFavoriteBoolean = await Promise.all(boardsWithFavorites);

    return boardsWithFavoriteBoolean;
  },
});
