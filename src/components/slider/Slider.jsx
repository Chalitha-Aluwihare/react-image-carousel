import { useEffect, useState } from "react";
import { SliderData } from "../../data/data";
import {BiSolidSkipPreviousCircle,BiSolidSkipNextCircle,} from "react-icons/bi";

const Slider = () => {
  const [activeImg, setActiveImg] = useState(0);

  // Function to handle left navigation
  const handlePrev = () => {
    setActiveImg((prev) => (prev === 0 ? SliderData.length - 1 : prev - 1));
  };

  // Function to handle right navigation
  const handleNext = () => {
    setActiveImg((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1));
  };

  useEffect(()=>{
    let timer = setTimeout(()=>{
      handleNext();
    },3000)

    return()=>{
      clearTimeout(timer)
    }
    
  },[activeImg])

  return (
    <div className="relative w-full h-auto p-10">
      {SliderData.map((item, i) => (
        // Main Container
        <div
          key={item.id}
          className={`relative flex items-center justify-center p-4 ${
            activeImg === i ? "block" : "hidden"
          }`}
        >
          {/* Image */}
          <img
            className="object-cover w-full rounded-xl h-[600px]"
            src={item.imageURL}
            alt={item.title}
          />

          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute p-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-8 top-1/2 hover:bg-opacity-80"
          >
            <BiSolidSkipPreviousCircle className="text-4xl text-white" />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute p-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-8 top-1/2 hover:bg-opacity-80"
          >
            <BiSolidSkipNextCircle className="text-4xl text-white" />
          </button>

          {/* Title */}
          <h1 className="absolute p-2 text-2xl font-bold text-center text-white bg-black bg-opacity-50 rounded bottom-12">
            {item.title}
          </h1>

          {/* Description */}
          <h2 className="absolute p-1 text-sm font-semibold text-center text-white bg-black bg-opacity-50 rounded bottom-6">
            {item.description}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Slider;
