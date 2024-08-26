"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OrgSidebar() {
  const searchParams = useSearchParams();
  const favorite = searchParams.get("favorite");

  return (
    <div className="hidden w-[206px] flex-col space-y-6 px-4 py-5 lg:flex">
      {/* Logo  */}
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={60}
            height={60}
          />
          <span
            className={cn(
              "font-poppins text-limed-spruce-900 text-xl font-semibold",
            )}>
            RT Board
          </span>
        </div>
      </Link>

      {/* Organization Switcher */}
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              width: "100%",
              padding: "6px",
              borderRadius: "8px",
              border: "1px solid #E5E5E5",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />

      {/* Team Boards */}
      <div className="w-full space-y-1">
        <Button
          variant={favorite ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="text-limed-spruce-900 w-full justify-start px-2">
          <Link href="/">
            <LayoutDashboard className="text-limed-spruce-900 mr-2 h-4 w-4" />
            Team Boards
          </Link>
        </Button>

        <Button
          variant={favorite ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="text-limed-spruce-900 w-full justify-start px-2">
          <Link
            href={{
              pathname: "/",
              query: { favorite: true },
            }}>
            <Star className="text-limed-spruce-900 mr-2 h-4 w-4" />
            Favorite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
}
