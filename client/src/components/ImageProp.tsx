// ImageProp is to support google API image calling
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
    source: string;
    alt: string;
}

export const ImageProp = ({ source, alt }: ImageProps) => {
    const [imageError, setImageError] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

    if (!source || imageError) {
        return (
            <div className="bg-secondary flex items-center justify-center w-full h-full">
                <span className="text-muted-foreground text-xs text-center px-2">
                    No photo available.
                </span>
            </div>
        );
    }
    const src = `${apiUrl}/cafes/photo?photoName=${encodeURIComponent(source)}`;

    return (
        <div className="relative w-full h-full">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
            />
        </div>
    );
};