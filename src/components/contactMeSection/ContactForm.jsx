import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_b9b7m41", "template_32pdt9i", form.current, {
        publicKey: "vs6HW4RtWiSw_uLSE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-white">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Digite seu nome"
          required
          className="h-12 rounded-lg bg-white px-2 text-black" // Cor do texto preta
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Digite seu email"
          required
          className="h-12 rounded-lg bg-white px-2 text-black" // Cor do texto preta
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Digite sua mensagem"
          required
          className="rounded-lg bg-white p-2 text-black" // Cor do texto preta
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-verdeFraco text-white h-12 font-bold text-xl hover:bg-verdeFraco bg-rosaRosa transition-all duration-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
