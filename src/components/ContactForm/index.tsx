import React from "react";
import { Button } from "../ui/button";

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-[2rem] w-full max-w-[600px] px-[2rem]`}
    >
      <label
        className={`flex flex-col gap-2 text-ligthbrown font-medium mt-[2rem]`}
      >
        Nome
        <input
          name="name"
          required
          className={`mt-1 p-3 rounded-md bg-[#2b2a29] text-white border border-transparent focus:border-ligthbrown focus:ring-2 focus:ring-ligthbrown/20 transition`}
          placeholder="Seu nome"
        />
      </label>

      <label className={`flex flex-col gap-2 text-ligthbrown font-medium`}>
        Email
        <input
          name="email"
          type="email"
          required
          className={`mt-1 p-3 rounded-md bg-[#2b2a29] text-white border border-transparent focus:border-ligthbrown focus:ring-2 focus:ring-ligthbrown/20 transition`}
          placeholder="seu@exemplo.com"
        />
      </label>

      <label className={`flex flex-col gap-2 text-ligthbrown font-medium`}>
        Mensagem
        <textarea
          name="message"
          required
          className={`mt-1 p-3 rounded-md bg-[#2b2a29] text-white border border-transparent focus:border-ligthbrown focus:ring-2 focus:ring-ligthbrown/20 transition h-36 resize-none`}
          placeholder="Escreva sua mensagem aqui..."
        />
      </label>

      <div className={`flex justify-start`}>
        <Button
          className={`cursor-pointer w-[30%] h-[4rem] text-3xl mb-[2rem]`}
          type="submit"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
