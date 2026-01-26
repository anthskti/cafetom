import { Shuffle, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onSurpriseMe: () => void;
}

export function Hero({ onSurpriseMe }: HeroProps) {
  return (
    <section className="bg-[linear-gradient(135deg,hsl(var(--cream))_0%,hsl(var(--warm-beige))_50%,hsl(var(--sage-light)/0.3)_100%)] min-h-70vh flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="p-8 max-w-3xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Coffee className="w-6 h-6 text-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Toronto
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 text-foreground">
          Find Your Perfect
          <br />
          <span className="italic text-primary">Study Spot</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Curated cafes for focused work sessions, quiet contemplation, 
          and the perfect cup of coffee.
        </p>
        
        <Button
          onClick={onSurpriseMe}
          size="lg"
          className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300"
        >
          <Shuffle className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          Surprise Me
        </Button>
      </div>
    </section>
  );
}
