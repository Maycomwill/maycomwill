import { ReactNode } from "react";
import AwesomeSlider from "react-awesome-slider";
import "../assets/slider-styles-copy.css";

function Slider({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <AwesomeSlider>{children}</AwesomeSlider>
    </div>
  );
}

export default Slider;
