import Project from "../components/Project";
import PokedexLogo from "../assets/pokedex/logo.ico";
import PokedexPrint from "../assets/pokedex/pokedex.jpg";
import PokedexMobilePrint from "../assets/pokedex/pokedex_mobile.jpg";
import CadernetaLogo from "../assets/caderneta/logo.svg";
import CadernetaPrint from "../assets/caderneta/caderneta.jpg";
import CadernetaMobilePrint from "../assets/caderneta/caderneta_mobile.jpg";
import BorderPrint from "../assets/border/border.jpg";
import BorderMobilePrint from "../assets/border/border_mobile.jpg";
import PomodoroPrint from "../assets/pomodoro/pomodoro.jpg";
import PomodoroMobilePrint from "../assets/pomodoro/pomodoro_mobile.jpg";
import CurrencyPrint from "../assets/dollar/dollar.jpg";
import CurrencyMobilePrint from "../assets/dollar/dollar_mobile.jpg";
import Slider from "../components/Slider";

function Projects() {
  return (
    <div className="font-size-3xl h-screen flex w-full flex-col px-2">
      <div className="mb-4">
        <h1 className="cursor-default font-alt text-4xl font-bold transition hover:text-yellowGreen">
          Projetos
        </h1>
      </div>
      <h1 className="text-justify">
        Aqui encontram-se alguns projetos meus que estão online e disponíveis
        para uso.
      </h1>
      <div className="h-full flex px-2 md:px-0 ">
        <Slider>
          <div>
            <Project
              title="Custom Pokedex"
              mobile_print={PokedexMobilePrint}
              print={PokedexPrint}
              logo={PokedexLogo}
              url="https://custom-pokedex.vercel.app/"
              desc="Uma simples pokedex, onde reune e simplifica a busca por informações sobre o mundo pokémon."
            />
          </div>
          <div>
            <Project
              title="Caderneta Digital"
              mobile_print={CadernetaMobilePrint}
              print={CadernetaPrint}
              logo={CadernetaLogo}
              url="https://cadernetadigital.vercel.app/"
              desc="Uma plataforma para o registro de suas escolas, turmas e alunos."
            />
          </div>
          <div>
            <Project
              title="Border-radius Previewer"
              mobile_print={BorderMobilePrint}
              print={BorderPrint}
              url="https://borderradiuspreviewer.vercel.app/"
              desc='Uma solução para demonstração da propriedade "border-radius" do css.'
            />
          </div>
          <div>
            {" "}
            <Project
              title="Pomodoro Timer"
              mobile_print={PomodoroMobilePrint}
              print={PomodoroPrint}
              url="https://pomodoro-react-maycomwill.vercel.app/"
              desc="Uma versão simples do famoso método de pomodoro, onde você determina um tempo para foco em suas atividades e um tempo para descanso."
            />
          </div>
          <div>
            <Project
              title="Today Currency"
              mobile_print={CurrencyMobilePrint}
              print={CurrencyPrint}
              url="https://todaycurrency.vercel.app/"
              desc="Consumindo uma api global, nessa aplicação, você pode converter o dólar americano para qualquer moeda mundial."
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
