import Maycom from "../assets/maycom.png";
import Html from "..//assets/html.svg";
import Css from "..//assets/css.svg";
import Js from "..//assets/js.svg";
import Ts from "..//assets/ts.svg";
import Node from "..//assets/node.svg";
import ReactIcon from "..//assets/react.svg";
import TecSVG from "../components/TecSVG";
import { dimensions } from "../utils/screenwidth";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-between overflow-hidden px-2 md:px-24 md:pt-12">
      <div className="z-10 flex flex-1 flex-col items-center justify-start gap-12 py-12 md:flex-row md:items-start md:justify-center">
        <article className="flex flex-col items-baseline leading-8">
          <p className="flex flex-col text-4xl">
            Oi,
            <span>
              me chamo{" "}
              <span className="font-alt font-bold text-[#acf100]">Maycom</span>
            </span>
          </p>
          <span className="font-mono text-xl">WEB Developer</span>
        </article>

        <article>
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="text-xl">Experiência em:</span>
            <div className="flex max-w-[240px] flex-wrap items-center justify-center gap-4">
              <TecSVG icon={Html} name="HTML5" />
              <TecSVG icon={Css} name="CSS3" />
              <TecSVG icon={Js} name="JavaScript" />
              <TecSVG icon={Ts} name="TypeScript" />
              <TecSVG icon={ReactIcon} name="React" />
              <TecSVG icon={Node} name="Node.js" />
            </div>
          </div>
        </article>
      </div>

      <img
        src={Maycom}
        className="bottom-1/2 top-1/2 w-72 md:w-96 absolute md:top-16 z-0 md:grayscale md:transition md:ease-in-out hover:grayscale-0"
        alt="Maycom's picture"
      />
    </div>
  );
}
