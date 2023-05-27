import { Switch } from "./components/Switch";
import "./styles/main.css";
import { Button } from "./components/Button";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { SocialButton } from "./components/SocialButton";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8 bg-light dark:bg-dark bg-no-repeat bg-cover overflow-hidden pt-2">
      <div className="flex flex-col gap-4 items-center justify-center w-full animate-initialDropdown">
        <div className="h-24 w-24 ring-2 ring-gray-900 dark:ring-gray-100 rounded-full hover:scale-105 transition-scale duration-200">
          <img
            src="https://github.com/maycomwill.png"
            alt="author's picture"
            className="rounded-full"
          />
        </div>
        <div>
          <span className="font-bold text-black dark:text-white">
            @maycomwill
          </span>
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 animate-initialSurgeup animation-delay-1000">
        <div className="w-[70%] md:w-[40%] flex flex-col items-center justify-center gap-4 m-auto">
          <Button
            title="Caderneta Digital"
            url="http://cadernetadigital.vercel.app/"
          />
          <Button
            title="Custom Pokedex"
            url="https://custom-pokedex.vercel.app/"
          />
          <Button
            title="Pomodoro Timer"
            url="https://pomodoro-react-maycomwill.vercel.app/"
          />
          <Button title="Today Currency" url="https://todaycurrency.vercel.app/" />
        </div>
        <div className="flex w-full items-center justify-center gap-4 md:gap-8 mt-4">
          <div>
            <SocialButton url="https://www.linkedin.com/in/maycom-willams-22b66716b/">
              <Linkedin />
            </SocialButton>
          </div>
          <div>
            <SocialButton url="https://www.instagram.com/maycomwill/">
              <Instagram />
            </SocialButton>
          </div>
          <div>
            <SocialButton url="https://twitter.com/maycomwillams">
              <Twitter />
            </SocialButton>
          </div>
          <div>
            <SocialButton url="https://github.com/maycomwill">
              <Github />
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="mb-8 text-black dark:text-white text-xs delay-700 animate-initialSurgeup animation-delay-1000">
        Feito por Maycom Willams &reg;
      </div>
    </div>
  );
}

export default App;
