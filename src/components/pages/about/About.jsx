import Challenges from "../challenges-and-solutions/challenges";
import "./about.css";
import HouseBackground from "./house-background.png";

export default function About() {
  return (
    <>
      <header>
        <div className="house-container">
        <img src={HouseBackground}></img>
        </div>
      </header>

    <div className="global-cont">
      <aside>
        <div className="commitment-container">
          <h1>COMPROMISSO COM PRECISÃO.</h1>

          <p>
            Somos uma empresa de engenharia formada por dois engenheiros com
            vasta experiência nas áreas de projetos, gestão e execuçao de obras
            na construção civil.
          </p>
        </div>
      </aside>
      <section>
        <div className="differences-container">
          <p>
            Nossa especialidade é fazer a obra acontecer, do início ao fim, com
            um nível extremo de exigência de qualidade e de cumprimento dos
            prazos.
          </p>

          <p>
            Isso envolve a gestão de pessoas, a organização impecável do campo
            de trabalho, o rígido respeito ao que foi definido no projeto e a
            entrega sempre dentro do prazo.
          </p>

          <p>
            <strong>Nossa área de atuação:</strong> Estado de Santa Catarina.
          </p>

          <h2>NOSSOS DIFERENCIAS</h2>

          <p>
            Seguimos o projeto à risca. Isso envolve as{" "}
            <strong>normativas técnicas</strong>, o tempo de cura dos materias,
            a preocupação extrema com a organização e limpeza da obra e com a{" "}
            <strong>responsabilidade ambiental.</strong>
          </p>

          <p>
            Prezamos pela <strong>segurança e bem-estar</strong> de quem
            trabalha na obra e pela organização de canteiro de obra para que o
            trabalho flua de maneira correta.
          </p>

          <p>
            Possuímos<strong> equipamentos próprios</strong> qualificados e revisados.
          </p>
        </div>
      </section>
      </div>
      <Challenges />
    </>
  );
}
