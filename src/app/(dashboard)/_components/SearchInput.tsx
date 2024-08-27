"use client";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { ChangeEvent, useEffect, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce search
  const doSearch = useDebounce((term) => {
    setSearchTerm(term as string);
  }, 500);

  // Handle search input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    doSearch(e.target.value);
  };

  // Update search query
  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: searchTerm,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );

    router.push(url);
  }, [searchTerm, router]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
}
