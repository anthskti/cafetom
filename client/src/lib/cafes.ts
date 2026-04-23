import { cafeDTO } from "@/types/cafedto";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

export const getAllCafes = async (): Promise<cafeDTO[]> => {
    const res = await fetch(`${API_URL}/Cafes`);
    if (!res.ok) throw new Error("Failed to get cafes :(");
    return res.json();
};