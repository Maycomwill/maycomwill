import { FormEvent, useState } from "react";
import { Button } from "./Button/Button";
import { dimensions } from "../utils/screenwidth";
// import SendMail from "../lib/SendMail";

function MailForm() {
  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    console.log("Send email:", message, "From", email, "Name", name);
    // SendMail({ email, message, name }).then(() => {
    //   console.log("OK");
    // });
    setMessage("");
  }
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="mt-2">
      <p>Ou se preferir, me envie um email</p>
      <form
        className="flex flex-col items-start justify-center space-y-2 pt-1"
        onSubmit={(e) => sendEmail(e)}
      >
        <label htmlFor="name">Digite seu nome:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex. John Doe:"
          className="w-full rounded-md bg-slate-300 p-2 text-zinc-900 selection:bg-[#acf100]"
        />
        <label htmlFor="email">Digite seu Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ex: john.doe@example.com:"
          className="w-full rounded-md bg-slate-300 p-2 text-zinc-900 selection:bg-[#acf100]"
        />
        <label htmlFor="email">Sua mensagem:</label>
        <textarea
          name="email"
          id="email"
          cols={dimensions.width ? 36 : 64}
          rows={8}
          autoComplete="off"
          className="rounded-md bg-slate-300 px-2 py-1 text-zinc-900 outline-none selection:bg-[#acf100]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="mt-40">
          <Button variant={"solid"} type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MailForm;
