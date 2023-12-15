import Logo from "../assets/logo.svg";
import { actualPage } from "../utils/actualPage";
function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-between px-4 pt-2 mb-4">
      <div className="flex items-center justify-center">
        <a href="/">
          <img src={Logo} alt="Maycom's Logo" className="h-12 w-12" />
        </a>
      </div>
      <div className="flex gap-4 md:mr-4">
        {actualPage == "/about" ? (
          <a href="/about" className="border-b-2 border-yellowGreen">
            Sobre
          </a>
        ) : (
          <a href="/about" className="border-b-2 border-grayBg">
            Sobre
          </a>
        )}
        {actualPage == "/projects" ? (
          <a href="/projects" className="border-b-2 border-yellowGreen">
            Projetos
          </a>
        ) : (
          <a href="/projects" className="border-b-2 border-grayBg">
            Projetos
          </a>
        )}
        {actualPage == "/contact" ? (
          <a href="/contact" className="border-b-2 border-yellowGreen">
            Contato
          </a>
        ) : (
          <a href="/contact" className="border-b-2 border-grayBg">
            Contato
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
