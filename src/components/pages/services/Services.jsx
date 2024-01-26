import "./services.css";
import Sky from "./sky.png";

import Trena from "../dream/trena.png"
import Carinha from "../dream/carinha.png"
import Planejamento from "../dream/planejamento.png"
import Obra from "../dream/trena.png"
import Methodology from "../methodology/Methodology";

export default function Services() {
  return (
    <>
      <header>
        <div className="sky-container">
          <img src={Sky}></img>
        </div>
      </header>

      <div className="services-container">
        <div className="job-container">
          <aside>
            <div className="our-work">
              <h1>NOSSO TRABALHO</h1>
              <p>Visão 360 graus da obra.</p>
              <p>Garantia de qualidade na entrega</p>
            </div>
          </aside>

          <section>
            <div className="our-work">
              <h2>COMO TRABALHAMOS</h2>

              <p>
                Oferecemos nossas modalidades de serviços de forma customizada,
                conforme a necessidade de cada cliente, mas sempre com nossa
                metodologia única, o que garante a entrega de excelência.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="services-container">
        <div className="job-container">
          <aside>
            <div className="full-service">
              <h3>FULL SERVICE</h3>
              <p>
                Temos mão de obra própria e oferecemos todas as soluções de
                engenharia. Oferecemos aos clientes:
              </p>
            </div>
          </aside>

          <section>
            <div className="servi-cont">
              <div class="servi">
                <div class="i">
                  <img src={Trena}></img>
                  Engenharia e planejamento
                </div>
                <div class="i">
                  <img src={Carinha}></img>
                  Gerenciamento de obra
                </div>
                <div class="i">
                  <img src={Planejamento}></img>
                  Construção e mão-de-obra
                </div>
                <div class="i">
                  <img src={Obra}></img>
                  Reformas e ampliações
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Methodology />
    </>
  );
}
