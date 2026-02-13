export interface cafeDTO {
    id: string;
    name: string;
    address: string;
    description: string;
    studyScore: number;
    hasWifi: boolean;
    isQuiet: boolean;
    hasOutlets: boolean;
    coordinates: coordinates;
    imageUrl: string;
}

export interface coordinates {
    lat: number;
    lng: number;
}