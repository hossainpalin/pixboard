import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="h-full w-full bg-gray-900">
      <UserButton />
    </div>
  );
}
