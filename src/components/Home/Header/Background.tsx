import { useEffect, useState } from "react";
import Image from "next/image";

// Images to use
import image_1 from "@/assets/gallery/img1.png";
import image_1_vertical from "@/assets/gallery/img1_vertical.png";
import image_2 from "@/assets/gallery/image_2.jpg";
import image_3 from "@/assets/gallery/image_3.jpg";
import image_4 from "@/assets/gallery/image_4.jpg";
import image_7 from "@/assets/gallery/image_7.jpg";
import image_8 from "@/assets/gallery/image_8.jpg";

export default function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar 768px según tu breakpoint
    };

  checkIsMobile();
  window.addEventListener("resize", checkIsMobile);

  return () => window.removeEventListener("resize", checkIsMobile);
}, []);


  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const images = [
                  isMobile ? image_1_vertical : image_1, 
                  image_2, 
                  image_3, 
                  image_4, 
                  image_7, 
                  image_8];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="">
      <div className="w-full z-2 bg-[#020817]"></div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 z-3 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
