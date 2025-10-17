import { useState } from "react";

interface TabsProps {
  tabs: string[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

export function NewsTabs({ tabs, activeTab = 0, onTabChange }: TabsProps) {
  const [active, setActive] = useState(activeTab);

  const handleTabClick = (index: number) => {
    setActive(index);
    onTabChange?.(index);
  };

  return (
    <div className="bg-[#009fda] content-stretch flex items-center relative shrink-0 w-full overflow-x-auto">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className={`box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] py-[12px] relative shrink-0 whitespace-nowrap transition-colors ${
            index === active ? "bg-white" : "hover:bg-[rgba(255,255,255,0.1)]"
          } ${index !== 0 ? "border-l border-[rgba(255,255,255,0.3)]" : ""}`}
        >
          <p
            className={`font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px] uppercase whitespace-pre ${
              index === active ? "text-[#252b37]" : "text-white"
            }`}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {tab}
          </p>
        </button>
      ))}
    </div>
  );
}
