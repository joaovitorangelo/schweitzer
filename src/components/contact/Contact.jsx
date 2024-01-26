import { useState, useEffect } from "react";
import "./contact.css";
import ContactPhoto from "./contact-photo-e.png";

import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorVisibility, setErrorVisibility] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "" || message === "") {
        setErrorVisibility(true);
        return;
    }

    setErrorVisibility(false);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      from_phone: phone,
    };

    emailjs
      .send(
        "service_ezou03w",
        "template_44ql1mu",
        templateParams,
        "vt8dbzF46Jv5YpXZN"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <section>
      <div className="main">
        <img src={ContactPhoto}></img>
        <div className="contain">
          <form className="form" onSubmit={sendEmail}>
            <h1>VAMOS CONVERSAR?</h1>

            <div className="form-group">
              <label for="name">Seu nome:</label>
              <input
                id="nameInput"
                className="input"
                type="text"
                placeholder="Como podemos chamar você?"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {errorVisibility && (
                <p style={{ color: 'red' }}>Por favor, preencha todos os campos.</p>
              )}
            </div>

            <div className="form-group">
              <label for="email">Seu e-mail:</label>
              <input
                id="emailInput"
                className="input"
                type="text"
                placeholder="Digite um e-mail válido para entrarmos em contato"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errorVisibility && (
                <p style={{ color: 'red' }}>Por favor, preencha todos os campos.</p>
              )}
            </div>

            <div className="form-group">
              <label for="phone">Seu telefone:</label>
              <input
                id="phoneInput"
                className="input"
                type="number"
                placeholder="Digite um telefone válido para entrarmos em contato"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {errorVisibility && (
                <p style={{ color: 'red' }}>Por favor, preencha todos os campos.</p>
              )}
            </div>

            <div className="form-group">
              <label for="message">Sua mensagem:</label>
              <textarea
                id="messageInput"
                className="textarea"
                placeholder="Descreva aqui detalhes sobre sua necessidade, sua ideia, seu projeto, ou como podemos ajudar você."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                maxLength={200}
                minLength={10}
              />
              {errorVisibility && (
                <p style={{ color: 'red' }}>Por favor, preencha todos os campos.</p>
              )}
            </div>
            <div className="button-send">
            <input type="submit" value="ENVIAR!" />
            </div>
          </form>
        </div>
      </div>

      <div className="contactAndLoc">
        <span className="spanOne">
          <p>contato@schweitzer.eng.br</p>
          (48) 9 9931-8499
        </span>
        <span className="spanTwo">
          Nosso escritório se encontra em imbituba, mas atendemos todas as
          regiões do estado de Santa Catarina.
        </span>
      </div>

      <div className="copy">
        <p>
          Copyright &copy; 2023 Schweitzer e GT Engenharia LTDA - Todos os
          direitos reservados
        </p>
      </div>
    </section>
  );
}

export default Contact;
