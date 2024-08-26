import List from "./list";
import NewButton from "./new-button";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 z-[1] flex h-full w-[60px] flex-col gap-y-4 bg-blue-950 p-3">
      <List />
      <NewButton />
    </aside>
  );
}
