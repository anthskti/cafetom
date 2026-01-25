import { Coffee, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 py-12 mt-20">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Coffee className="w-5 h-5 text-primary" />
          <span className="font-serif text-lg font-medium">Study Spots TO</span>
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta" /> for Toronto's remote workers & students
        </p>
      </div>
    </footer>
  );
}
