import React from "react";
import image1 from "../assets/Figure → image-2_1.png.png";
import image2 from "../assets/Figure → image-2.png.png";
import image3 from "../assets/Figure → image-3.png.png";
import image4 from "../assets/Figure → image-3_1.png.png";
import image6 from "../assets/Figure → image-4.png.png";
import image7 from "../assets/Figure → image-4_1.png.png";
import image8 from "../assets/Figure → image-5.png.png";
import image9 from "../assets/Figure → image-5_1.png.png";
import image10 from "../assets/Figure → image-5_2.png.png";

const GridImages = () => {
  return (
    <div className="grid grid-cols-5 gap-x-1 gap-y-0 m-0 p-0 mt-10">
      {[
        image1, image2, image3, image4,
        image6, image7, image8, image9,
        image10
      ].map((image, index) => (
        <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden">
          <img
            src={image}
            alt={`random${index + 1}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default GridImages;
