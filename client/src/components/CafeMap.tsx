import { MapPin } from "lucide-react";
import { cafeDTO } from "@/types/cafedto";
import { GoogleMap, TransitLayer, useJsApiLoader, Marker } from '@react-google-maps/api';

interface CafeMapProps {
  cafes: cafeDTO[];
  selectedCafe: cafeDTO | null;
}


export function CafeMap({ cafes, selectedCafe }: CafeMapProps) {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_APIKEY as string,
    mapIds:['435669960d4240c636b1846d']
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  const mapOptions = {
    mapId: '435669960d4240c636b1846d',
    disableDefaultUI: true,        
    zoomControl: true,             
    mapTypeControl: false,         
    streetViewControl: false,      
    fullscreenControl: false,      
    gestureHandling: "cooperative", // Better UX for long pages
    restriction: {
      latLngBounds: {
        north: 43.99, // Steeles Ave area
        south: 43.58, // The Lake
        west: -79.64, // Mississauga border
        east: -79.12, // Scarborough border
      },
      strictBounds: false,
    },
  };

  return (
    <section className="relative bg-secondary/50 rounded-3xl overflow-hidden mx-4 md:mx-6 lg:mx-40">
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={{ width: '100%', height: '600px' }}
        center={{ lat: 43.6532, lng: -79.3832 }}
        zoom={13}
        
      >
        <TransitLayer />
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