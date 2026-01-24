import { Wifi, Volume2, Plug } from "lucide-react";

export type FilterType = "wifi" | "quiet" | "outlets";

interface FilterChipsProps {
  activeFilters: FilterType[];
  onToggle: (filter: FilterType) => void;
}

const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  { id: "wifi", label: "Fast Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
  { id: "quiet", label: "Quiet Vibes", icon: <Volume2 className="w-4 h-4" /> },
  { id: "outlets", label: "Plenty of Outlets", icon: <Plug className="w-4 h-4" /> },
];

export function FilterChips({ activeFilters, onToggle }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter.id);
        return (
          <button
            key={filter.id}
            onClick={() => onToggle(filter.id)}
            className={`filter-chip flex items-center gap-2 ${
              isActive ? "filter-chip-active" : ""
            }`}
          >
            {filter.icon}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
