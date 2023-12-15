import React, { ReactNode } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Slider({ children }: { children: ReactNode }) {
  return (
    <div className="h-full flex flex-1 w-full">
      <AwesomeSlider>{children}</AwesomeSlider>
    </div>
  );
}

export default Slider;
