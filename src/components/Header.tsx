import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useEffect, useState } from "react";

function Header() {
  const [page, setPage] = useState("");

  useEffect(() => {
    let actualPage;
    actualPage = window.location.pathname;
    setPage(actualPage);
  }, [page]);

  return (
    <div className="flex h-14 w-full items-center justify-between px-4 pt-2 mb-4">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={Logo} alt="Maycom's Logo" className="h-12 w-12" />
        </Link>
      </div>
      <div className="flex gap-4 md:mr-4">
        {page == "/about" ? (
          <Link to="/about" className="border-b-2 border-yellowGreen">
            Sobre
          </Link>
        ) : (
          <Link to="/about" className="border-b-2 border-grayBg">
            Sobre
          </Link>
        )}
        {page == "/projects" ? (
          <Link to="/projects" className="border-b-2 border-yellowGreen">
            Projetos
          </Link>
        ) : (
          <Link to="/projects" className="border-b-2 border-grayBg">
            Projetos
          </Link>
        )}
        {page == "/contact" ? (
          <Link to="/contact" className="border-b-2 border-yellowGreen">
            Contato
          </Link>
        ) : (
          <Link to="/contact" className="border-b-2 border-grayBg">
            Contato
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
