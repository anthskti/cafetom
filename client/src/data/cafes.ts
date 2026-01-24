// Temp for demo

export interface Cafe {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  image: string;
  studyScore: number;
  hasWifi: boolean;
  isQuiet: boolean;
  hasOutlets: boolean;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const cafes: Cafe[] = [
  {
    id: "1",
    name: "Dineen Coffee Co.",
    neighborhood: "Financial District",
    address: "140 Yonge St",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    studyScore: 4,
    hasWifi: true,
    isQuiet: false,
    hasOutlets: true,
    description: "Historic building with stunning architecture and excellent espresso.",
    coordinates: { lat: 43.6508, lng: -79.3785 }
  },
  {
    id: "2",
    name: "Carbonic",
    neighborhood: "Little Italy",
    address: "640 College St",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    studyScore: 5,
    hasWifi: true,
    isQuiet: true,
    hasOutlets: true,
    description: "Minimalist space with specialty coffee and natural wine.",
    coordinates: { lat: 43.6544, lng: -79.4202 }
  },
  {
    id: "3",
    name: "135 Ossington",
    neighborhood: "Dundas West",
    address: "135 Ossington Ave",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    studyScore: 5,
    hasWifi: true,
    isQuiet: true,
    hasOutlets: true,
    description: "Bright, airy space perfect for long study sessions.",
    coordinates: { lat: 43.6477, lng: -79.4222 }
  },
  {
    id: "4",
    name: "Sam James Coffee Bar",
    neighborhood: "Harbord Village",
    address: "297 Harbord St",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    studyScore: 3,
    hasWifi: true,
    isQuiet: false,
    hasOutlets: false,
    description: "Cozy neighborhood spot with exceptional pour-overs.",
    coordinates: { lat: 43.6622, lng: -79.4105 }
  },
  {
    id: "5",
    name: "Neo Coffee Bar",
    neighborhood: "Corktown",
    address: "161 Frederick St",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
    studyScore: 4,
    hasWifi: true,
    isQuiet: true,
    hasOutlets: true,
    description: "Industrial-chic cafe with ample seating and great lattes.",
    coordinates: { lat: 43.6515, lng: -79.3601 }
  },
  {
    id: "6",
    name: "Boxcar Social",
    neighborhood: "The Annex",
    address: "178 Dupont St",
    image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80",
    studyScore: 4,
    hasWifi: true,
    isQuiet: false,
    hasOutlets: true,
    description: "Coffee, cocktails, and community in a converted warehouse.",
    coordinates: { lat: 43.6745, lng: -79.4082 }
  },
  {
    id: "7",
    name: "Pilot Coffee Roasters",
    neighborhood: "Leslieville",
    address: "983 Queen St E",
    image: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=600&q=80",
    studyScore: 4,
    hasWifi: true,
    isQuiet: true,
    hasOutlets: true,
    description: "Flagship roastery with spacious seating and stellar beans.",
    coordinates: { lat: 43.6622, lng: -79.3301 }
  },
  {
    id: "8",
    name: "Dark Horse Espresso",
    neighborhood: "Queen West",
    address: "215 Spadina Ave",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80",
    studyScore: 3,
    hasWifi: true,
    isQuiet: false,
    hasOutlets: true,
    description: "Beloved local chain known for strong coffee and creativity.",
    coordinates: { lat: 43.6498, lng: -79.3975 }
  },
  {
    id: "9",
    name: "Versus Coffee",
    neighborhood: "Roncesvalles",
    address: "181 Roncesvalles Ave",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80",
    studyScore: 5,
    hasWifi: true,
    isQuiet: true,
    hasOutlets: true,
    description: "Quiet gem with big windows and dedicated study-friendly atmosphere.",
    coordinates: { lat: 43.6471, lng: -79.4519 }
  },
  {
    id: "10",
    name: "The Library Specialty Coffee",
    neighborhood: "Bloor West",
    address: "281 Bloor St W",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    studyScore: 5,
    hasWifi: true,
    isQuiet: true,
    hasOutlets: true,
    description: "True to its name—hushed tones and scholarly vibes.",
    coordinates: { lat: 43.6672, lng: -79.4029 }
  }
];
