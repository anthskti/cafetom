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
            className={`flex items-center gap-2 
                        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                        border
                        ${ isActive ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
                        : "border-primary/30 bg-background hover:bg-secondary hover:border-primary/30"
            }`}
            // if isActive, primary green colour. 
          >
            {filter.icon}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
