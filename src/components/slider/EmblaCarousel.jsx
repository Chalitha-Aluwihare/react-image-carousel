import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SliderData } from "../../data/data";

const EmblaCarousel = () => {
  const options = {
    delay: 3000,
  };
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(options)]);
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {SliderData.map((item) => {
            return (
              <div
                className="flex items-center justify-center embla__slide"
                key={item.id}
              >
                <img
                  className="object-cover w-full rounded-xl h-[600px] m-[60px]"
                  src={item.imageURL}
                  alt={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
