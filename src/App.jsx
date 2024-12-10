import Slider from "./components/slider/Slider";
import EmblaCarousel from "./components/slider/EmblaCarousel";

const App = () => {
  return (
    // main container
    <div className=" bg-slate-300">
      {/* Main title */}
      <div className="text-center">
        <h1 className="font-bold text-[30px] p-3">
          JavaScript Image Slider with Autoplay
        </h1>
        <p className="w-1/2 mx-auto text-center">
          A simple and responsive image slider created using the Embla Carousel
          library in JavaScript. This slider offers seamless navigation and
          autoplay capabilities, displaying images dynamically from a structured
          data source.
        </p>
      </div>
      <Slider />
      <div className="">
        <h1 className="text-center font-bold text-[30px]">Dynamic Image Slider with Embla Carousel</h1>
        <p className="w-1/2 mx-auto text-center">
          A smooth and customizable image slider built using the lightweight and
          flexible Embla Carousel library. This slider features autoplay
          functionality and dynamic data rendering, making it perfect for modern
          web applications.
        </p>
      </div>
      <EmblaCarousel />
    </div>
  );
};

export default App;
