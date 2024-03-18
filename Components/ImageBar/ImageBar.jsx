"use client"
import { React, useState, useEffect} from "react";
const ImageBar = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const dynamicTimer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((index + 1) % 3);
        setFade(false);
      }, 1000); // Change this value to adjust the transition duration
    }, 2000); // Change this value to adjust the interval between image changes

    return () => clearTimeout(dynamicTimer);
  }, [index]);

  return (
    <div className="h-[89vh] relative  bg-black">
      <img
        key={index}
        src={`img${index}.jpg`}
        alt={`Image ${index}`}
        id="bckgrnd"
        className={`h-[100%] w-[100%] object-cover absolute transition-opacity ${fade ? "opacity-0 duration-2000 delay-700 ease-in-out animate-fadeOut" : "opacity-100 delay-700 duration-2000 ease-in animate-fadeIn"
          }`}

        style={{ filter: "brightness(50%)" }}
      />
    </div>
  );
};

export default ImageBar;

