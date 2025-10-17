import { useState } from "react";
import { Search, X } from "lucide-react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="relative w-full">
      <div
        className={`bg-white relative rounded-[4px] transition-all ${
          isFocused ? "ring-2 ring-[#009fda]" : ""
        }`}
      >
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Search className="size-5 text-[#717680] shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Hledejte kolegu, dokument nebo novinku..."
              className="flex-1 font-['Roboto:Regular',_sans-serif] text-[14px] text-[#717680] bg-transparent outline-none placeholder:text-[#717680]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            />
            {searchTerm && (
              <button
                onClick={handleClear}
                className="shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Clear search"
              >
                <X className="size-4 text-[#717680]" />
              </button>
            )}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[4px]"
        />
      </div>
    </div>
  );
}
