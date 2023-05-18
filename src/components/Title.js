import React, { useState, useEffect } from "react";

const words = ["Weather", "Forecast", "App"];

export default function Title() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the word every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="text-4xl font-bold my-5 text-sky-500 pb-10">
      {words.map((word, index) => (
        <span
          key={word}
          className={`text-4xl font-bold transition-opacity duration-100 ${
            index === currentWordIndex ? "opacity-100 mx-4" : "opacity-50"
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  );

  // return (
  //   <div className=>
  //     <span className="hover:cursor-pointer">
  //       <a href="#">Weather Forecast App</a>
  //     </span>
  //   </div>
  // );
}
