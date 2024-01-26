import Balcony from "./balcony.png";
import "./discover.css";

export function Discover() {
  return (
    <section>
      <div className="global-container">
        <div className="balcony-container">
          <img src={Balcony} alt="balcony"></img>
        </div>

        <div className="know-more-container">
          <p>
            Somos uma empresa de engenharia formada por dois engenheiros com
            vasta experiencia nas areas de projetos, gestão e execução de obras
            na construção civil.
            <p>
              Nossa especialidade é fazer a obra acontecer, do início ao fim,
              com um nível extremo de exigência de qualidade e de cumprimento
              dos prazos.
            </p>
            <a>Saiba mais →</a>
          </p>

          <div className="projects-information-container">
            <span className="span1">projetos criados desde 2021</span>
            <span className="span2">obras originais concluídas</span>
            <span className="span3">obras em andamento</span>
          </div>
        </div>
      </div>
    </section>
  );
}
