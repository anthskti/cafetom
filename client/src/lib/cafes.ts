import { cafeDTO } from "@/types/cafedto";

const API_URL = "http://localhost:5105/api/Cafes";
// process.env.NEXT_PUBLIC_API_URL

export const getAllCafes = async (): Promise<cafeDTO[]> => {
    const res = await fetch(`${API_URL}`);
    if (!res.ok) throw new Error("Failed to get cafes :(");
    return res.json();
};