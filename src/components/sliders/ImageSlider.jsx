import { useEffect, useState } from "react";
import { IMAGES } from "../../../data/image-slider"
import { Image } from "../layouts/Image";

export const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentIndex) =>
                (currentIndex + 1) % IMAGES.length
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex overflow-hidden w-full h-full relative">
            {IMAGES.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    wrapperClassName={
                        `${index === currentImageIndex ?
                            '!opacity-100' :
                            '!opacity-0 hidden'
                        }
                    transition-opacity duration-200 ease-in-out !object-cover absolute left-0 top-0`
                    }
                />
            ))}
        </div>
    )
}