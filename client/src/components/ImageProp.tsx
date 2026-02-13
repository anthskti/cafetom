// ImageProp is to support google API image calling
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
    source: string;
    alt: string;
}

export const ImageProp = ({ source, alt }: ImageProps) => {
    const [imageError, setImageError] = useState(false);

    if (!source || imageError) {
        return (
            <div className="bg-secondary flex items-center justify-center w-full h-full">
                <span className="text-muted-foreground text-xs text-center px-2">
                    No photo available.
                </span>
            </div>
        );
    }

    // Use backend endpoint to proxy images (avoids CORS issues)
    const src = `http://localhost:5105/api/cafes/photo?photoName=${encodeURIComponent(source)}`;

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