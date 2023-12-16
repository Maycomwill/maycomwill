import React, { ReactNode } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Slider({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <AwesomeSlider>{children}</AwesomeSlider>
    </div>
  );
}

export default Slider;
