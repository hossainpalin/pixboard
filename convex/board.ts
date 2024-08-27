import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/assets/placeholders/1.jpg",
  "/assets/placeholders/2.jpg",
  "/assets/placeholders/3.jpg",
  "/assets/placeholders/4.jpg",
  "/assets/placeholders/5.jpg",
  "/assets/placeholders/6.jpg",
  "/assets/placeholders/7.jpg",
  "/assets/placeholders/8.jpg",
  "/assets/placeholders/9.jpg",
  "/assets/placeholders/10.jpg",
];

export const createBoard = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});
