import { useEffect, useState } from "react";
import Image from "next/image";

// Images to use
import image_1 from "@/assets/gallery/image_1.jpg";
import image_2 from "@/assets/gallery/image_2.jpg";

export default function Background() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const images = [image_1, image_2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full absolute">
      <div className="absolute w-full h-full z-2 bg-[#020817]"></div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 z-3 ${
            index === currentImageIndex ? "opacity-50" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
