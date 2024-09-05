"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import InviteButton from "./InviteButton";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5">
      {/* Search Input */}
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>

      {/* Organization Switcher */}
      <div className="block flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
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
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
}
