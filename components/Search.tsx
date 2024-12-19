"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import Thumbnail from "@/components/Thumbnail";
import FormattedDateTime from "@/components/FormattedDateTime";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [results, setResults] = useState<Models.Document[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    const fetchFiles = async () => {
      if (debouncedQuery.length === 0) {
        setResults([]);
        setOpen(false);
        return router.push(path.replace(searchParams.toString(), ""));
      }

      const files = await getFiles({ types: [], searchText: debouncedQuery });
      setResults(files.documents);
      setOpen(true);
    };

    fetchFiles();
  }, [debouncedQuery]);

  useEffect(() => {
    if (!searchQuery) {
      setQuery("");
    }
  }, [searchQuery]);

  const handleClickItem = (file: Models.Document) => {
    setOpen(false);
    setResults([]);

    router.push(
      `/${
        file.type === "video" || file.type === "audio" ? "media" : file.type + "s"
      }?query=${query}`,
    );
  };

  return (
    <div className="search bg-black text-white p-1 rounded-full">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="  Search Your File..."
          className="search-input bg-gray-800 text-white rounded-full"
          onChange={(e) => setQuery(e.target.value)}
        />

        {open && (
          <ul className="search-result bg-white-900 text-white p-2 rounded-md shadow-lg">
            {results.length > 0 ? (
              results.map((file) => (
                <li
                  className="flex items-center justify-between p-2 rounded-md cursor-pointer"
                  style={{ backgroundColor: "#F5F5F5" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#28282B")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F5F5F5")}
                  key={file.$id}
                  onClick={() => handleClickItem(file)}
                >
                  <div className="flex items-center gap-4">
                    <Thumbnail
                      type={file.type}
                      extension={file.extension}
                      url={file.url}
                      className="size-9 min-w-9"
                    />
                    <p className="subtitle-2 line-clamp-1 text-gray-400">
                      {file.name}
                    </p>
                  </div>

                  <FormattedDateTime
                    date={file.$createdAt}
                    className="caption line-clamp-1 text-light-200"
                  />
                </li>
              ))
            ) : (
              <p className="empty-result text-gray-400">
                There is no file with this name
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;