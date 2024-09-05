"use client";

import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/BoardList";
import EmptyOrg from "./_components/EmptyOrg";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <div className="h-[calc(100%-80px)] flex-1 p-5">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
