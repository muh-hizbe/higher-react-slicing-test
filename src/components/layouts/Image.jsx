import { useState } from "react";
import MImage from "mui-image";

export const Image = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const onImageLoaded = () => {
        setImageLoaded(true)
    }

    return (
        <MImage
            src={props?.src}
            loading="lazy"
            onLoad={onImageLoaded}
            className={imageLoaded ? `blur-0 ${props?.className}` : 'bg-black scale-120 blur-2xl'}
            {...props}
        />
    )
}