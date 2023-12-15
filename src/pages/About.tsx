import Logo from "../assets/maycom1.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="font-size-3xl h-full w-full px-2">
      <div className="mb-4">
        <h1 className="cursor-default font-alt text-4xl font-bold transition hover:text-[#acf100]">
          Sobre
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full text-justify space-y-6 md:w-[50%]">
          <p>
            Formado em química pela UFRPE, sou um professor que tem o prazer de
            ensinar
          </p>
          <p>
            Atualmente, busco a transição de carreira para a área de tecnologia,
            dessa forma curso técnico em desenvolvimento de sistemas na ETE Adv.
            José David Gil Rodrigues.
          </p>
          <p>
            Também realizei diversos cursos em HTML5, CSS3, JS e participei de
            alguns bootcamps da Rocketseat, onde tive contato com o React,
            Node.Js, onde desenvolvi boa parte dos meus{" "}
            <a className="text-[#acf100]" href={"/projects"}>
              projetos
            </a>
            .
          </p>
        </div>
        <div className="w-[50%] hidden md:flex md:items-center md:justify-center">
          <img src={Logo} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
}

export default About;
