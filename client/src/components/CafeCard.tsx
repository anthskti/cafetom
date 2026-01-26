import { MapPin, Wifi, Volume2, Plug } from "lucide-react";
import { Cafe } from "@/data/cafes";
import { StudyScore } from "./StudyScore";

interface CafeCardProps {
  cafe: Cafe;
  index: number;
}

export function CafeCard({ cafe, index }: CafeCardProps) {
  return (
    <article
      className="bg-card rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-1">
              {cafe.name}
            </h3>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {cafe.neighborhood}
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Study Score
            </span>
            <StudyScore score={cafe.studyScore} />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {cafe.description}
        </p>
        
        <div className="flex items-center gap-3 pt-3 border-t border-border">
          {cafe.hasWifi && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Wifi className="w-3.5 h-3.5 text-primary" />
              Wi-Fi
            </div>
          )}
          {cafe.isQuiet && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Volume2 className="w-3.5 h-3.5 text-primary" />
              Quiet
            </div>
          )}
          {cafe.hasOutlets && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Plug className="w-3.5 h-3.5 text-primary" />
              Outlets
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
