import { cafeDTO } from "@/types/cafedto";
import { CafeCard } from "./CafeCard";

interface CafeGridProps {
  cafes: cafeDTO[];
}

export function CafeGrid({ cafes }: CafeGridProps) {
  if (cafes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">
          No cafes match your filters. Try adjusting your selection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cafes.map((cafe, index) => (
        <CafeCard key={cafe.id} cafe={cafe} index={index} />
      ))}
    </div>
  );
}
