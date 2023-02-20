import { useEffect } from "react";
import { Switch } from "./components/Switch";
import { useTheme } from "./hooks/useTheme";
import "./styles/main.css";
import { Button } from "./components/Button";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { SocialButton } from "./components/SocialButton";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between bg-light dark:bg-dark md:bg-fullLight dark:md:bg-fullDark bg-cover">
      <div className="flex flex-col gap-4 items-center justify-center w-full my-4 pt-4">
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
      <div className="w-full flex flex-col gap-4">
        <div className="w-[70%] md:w-[40%] flex flex-col items-center justify-center gap-4 m-auto">
          <Button
            title="Caderneta Digital"
            url="http://caderneta-digital.vercel.app/"
          />
          <Button
            title="Custom Pokedex"
            url="https://custom-pokedex.vercel.app/"
          />
          <Button
            title="Pomodoro Timer"
            url="https://pomodoro-react-maycomwill.vercel.app/"
          />
          <Button title="Em Breve" url="/" disabled />
        </div>
        <div className="flex w-full items-center justify-center gap-4 md:gap-8 py-8">
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
      <div className="mb-8 text-black dark:text-white transition-colors duration-200 text-xs">
        Feito por Maycom Willams ®
      </div>
    </div>
  );
}

export default App;
