import { Layers } from "lucide-react";
import { dimensions } from "../utils/screenwidth";
import { Button } from "./Button/Button";

interface ProjectProps {
  title: string;
  print: string;
  logo?: string;
  desc: string;
  mobile_print: string;
  url: string;
}
function Project({
  mobile_print,
  print,
  desc,
  logo,
  title,
  url,
}: ProjectProps) {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-start">
        <Button variant={"ghost"}>
          <a
            href={url}
            rel="noopener"
            target="_blank"
            className=" flex items-center justify-center gap-2"
          >
            {logo ? (
              <img src={logo} alt="Logo" className="h-8 w-8" />
            ) : (
              <Layers color="white" />
            )}
            <span>{title}</span>
          </a>
        </Button>
        <div className="w-full text-justify md:flex md:items-center md:justify-center">
          <p>{desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-4">
        {dimensions.width <= 500 ? (
          <img src={mobile_print} alt={`${title} pricture`} className="h-96" />
        ) : (
          <img src={print} alt={`${title} pricture`} className="h-96" />
        )}
      </div>
    </div>
  );
}

export default Project;
