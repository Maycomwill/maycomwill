import { Github, Instagram, Linkedin } from "lucide-react";
import { IconButton } from "../components/Button/IconButton";
import MailForm from "../components/MailForm";

export default function Contact() {
  return (
    <div className="m-0 flex flex-1 flex-col items-start justify-start px-2">
      <div className="mb-4">
        <h1 className="cursor-default font-alt text-4xl font-bold transition hover:text-[#acf100]">
          Contato
        </h1>
      </div>
      <div className="w-full md:w-[50%] text-justify space-y-4">
        <span className="break-words">
          Entre em contato atraves das minhas redes sociais:
        </span>
        <div className="flex w-full items-center justify-around md:justify-start md:gap-4">
          <a
            href="https://github.com/maycomwill"
            rel="noopener"
            target="_blank"
          >
            <IconButton>
              <Github size={32} />
            </IconButton>
          </a>
          <a
            href="https://linkedin.com/in/maycomwill"
            rel="noopener"
            target="_blank"
          >
            <IconButton>
              <Linkedin size={32} />
            </IconButton>
          </a>
          <a
          // href="https://instagram.com/maycomwill"
          // rel="noopener"
          // target="_blank"
          >
            <IconButton className="cursor-not-allowed">
              <Instagram size={32} />
            </IconButton>
          </a>
        </div>
      </div>
      {/* <MailForm /> */}
    </div>
  );
}
