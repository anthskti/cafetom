import { cafeDTO } from "@/types/cafedto";

const API_URL = "http://localhost:5105/api/";
// process.env.NEXT_PUBLIC_API_URL

export const fetchCafes = async (): Promise<cafeDTO[]> => {
    const res = await fetch(`${API_URL}/Cafes`);
    if (!res.ok) throw new Error("Failed to get cafes :(");
    return res.json();
}