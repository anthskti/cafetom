"use client"
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import { cafes, Cafe } from "@/data/cafes";
import { Hero } from "@/components/Hero";
import { FilterChips, FilterType } from "@/components/FilterChips";
import { CafeMap } from "@/components/CafeMap";
import { CafeGrid } from "@/components/CafeGrid";
import { toast } from "sonner";



export default function Home() {
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);

  const filteredCafes = useMemo(() => {
    return cafes.filter((cafe) => {
      if (activeFilters.includes("wifi") && !cafe.hasWifi) return false;
      if (activeFilters.includes("quiet") && !cafe.isQuiet) return false;
      if (activeFilters.includes("outlets") && !cafe.hasOutlets) return false;
      return true;
    });
  }, [activeFilters]);

  const handleToggleFilter = useCallback((filter: FilterType) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  }, []);

  const handleSurpriseMe = useCallback(() => {
    const availableCafes = filteredCafes.length > 0 ? filteredCafes : cafes;
    const randomIndex = Math.floor(Math.random() * availableCafes.length);
    const randomCafe = availableCafes[randomIndex];
    
    setSelectedCafe(randomCafe);
    
    toast.success(`Your surprise pick: ${randomCafe.name}`, {
      description: `${randomCafe.neighborhood} • Study Score: ${randomCafe.studyScore}/5`,
      duration: 5000,
    });

    // Scroll to map section
    setTimeout(() => {
      document.getElementById("map-section")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }, [filteredCafes]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onSurpriseMe={handleSurpriseMe} />

      {/* Filters Section */}
      <section className="py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
              What matters to you?
            </h2>
            <p className="text-muted-foreground">
              Filter by amenities to find your ideal workspace
            </p>
          </div>
          <FilterChips activeFilters={activeFilters} onToggle={handleToggleFilter} />
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="py-8">
        <CafeMap cafes={filteredCafes} selectedCafe={selectedCafe} />
      </section>

      {/* Cafe Cards Grid */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-3">
              Curated Study Spots
            </h2>
            <p className="text-muted-foreground">
              {filteredCafes.length} {filteredCafes.length === 1 ? "cafe" : "cafes"} ready for your next productive session
            </p>
          </div>
          <CafeGrid cafes={filteredCafes} />
        </div>
      </section>
    </div>
  );
}
