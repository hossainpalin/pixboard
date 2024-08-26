"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-x-4 bg-green-600 p-5">
      <div className="hidden lg:flex lg:flex-1">{/* TODO: Add Search */}</div>
      <UserButton />
    </nav>
  );
}
