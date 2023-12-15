import { Link } from "react-router-dom";

function About() {
  return (
    <div className="font-size-3xl h-full w-full px-2">
      <div className="mb-4">
        <h1 className="cursor-default font-alt text-4xl font-bold transition hover:text-[#acf100]">
          Sobre
        </h1>
      </div>
      <div className="w-full text-justify space-y-6">
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
          <a className="text-[#acf100] underline" href={"/projects"}>
            projetos
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
