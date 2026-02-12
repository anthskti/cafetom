import { MapPin } from "lucide-react";
import { Cafe } from "@/data/cafes";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface CafeMapProps {
  cafes: Cafe[];
  selectedCafe: Cafe | null;
}


export function CafeMap({ cafes, selectedCafe }: CafeMapProps) {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_APIKEY as string
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <section className="relative bg-secondary/50 rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 43.6532, lng: -79.3832 }}
        zoom={12}
      >
        {cafes.map(cafe => (
          <Marker 
            key={cafe.id} 
            position={cafe.coordinates}
            title={cafe.name}
          />
        ))}
      </GoogleMap>
      
      {/* Info overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
        <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
          <span className="text-sm font-medium text-foreground">
            {cafes.length} study spots in Toronto
          </span>
        </div>
      </div>
    </section>
  );
}
