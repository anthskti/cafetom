import { MapPin } from "lucide-react";
import { Cafe } from "@/data/cafes";

interface CafeMapProps {
  cafes: Cafe[];
  selectedCafe: Cafe | null;
}

/**
 * GOOGLE MAPS INTEGRATION
 * 
 * To enable the interactive Google Maps, you'll need to:
 * 
 * 1. Get a Google Maps API key from: https://console.cloud.google.com/google/maps-apis
 * 2. Enable the "Maps JavaScript API" for your project
 * 3. Install @react-google-maps/api: npm install @react-google-maps/api
 * 4. Replace this placeholder component with the actual Google Maps implementation
 * 
 * Example implementation:
 * 
 * import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
 * 
 * const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY_HERE';
 * 
 * <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
 *   <GoogleMap
 *     mapContainerStyle={{ width: '100%', height: '400px' }}
 *     center={{ lat: 43.6532, lng: -79.3832 }}
 *     zoom={12}
 *   >
 *     {cafes.map(cafe => (
 *       <Marker key={cafe.id} position={cafe.coordinates} />
 *     ))}
 *   </GoogleMap>
 * </LoadScript>
 */

export function CafeMap({ cafes, selectedCafe }: CafeMapProps) {
  return (
    <section className="relative bg-secondary/50 rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16">
      {/* Map placeholder with cafe pins visualization */}
      <div className="relative h-100 md:h-125 flex items-center justify-center">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Cafe pins visualization */}
        <div className="relative w-full max-w-4xl h-full p-8">
          {cafes.map((cafe, index) => {
            // Distribute pins in a visually pleasing pattern
            const angle = (index / cafes.length) * Math.PI * 2;
            const radius = 30 + (index % 3) * 10;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            const isSelected = selectedCafe?.id === cafe.id;
            
            return (
              <div
                key={cafe.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isSelected ? "z-10 scale-125" : "hover:scale-110"
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-soft transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                {isSelected && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-1.5 rounded-lg shadow-soft text-sm font-medium">
                    {cafe.name}
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Center marker for Toronto */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-terracotta animate-pulse" />
          </div>
        </div>
        
        {/* Overlay text */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <span className="text-sm font-medium text-foreground">
              {cafes.length} study spots in Toronto
            </span>
          </div>
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft text-sm text-muted-foreground">
            Map view • Add your API key to enable
          </div>
        </div>
      </div>
    </section>
  );
}
