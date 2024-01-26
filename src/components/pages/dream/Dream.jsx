import "./dream.css";
import Trena from "./trena.png"
import Carinha from "./carinha.png"
import Planejamento from "./planejamento.png"
import Obra from "./obra.png"

export default function Dream() {
  return (
    <section>
      <div className="dream-container-main">
        <div className="dream-container">
          <h1>REALIZAMOS O SEU SONHO!</h1>

          <p>
            Temos mão de obra própria e oferecemos todas as soluções de
            engenharia. Oferecemos aos clientes:
          </p>

          <a href="/">Conheça mais sobre os nossos serviços →</a>
        </div>

        <div className="services-container">
          <div class="services">
            <div class="item">
              <img src={Trena}></img>
              Engenharia e planejamento
              </div>
            <div class="item">
              <img src={Carinha}></img>
              Gerenciamento de obra
            </div>
            <div class="item">
              <img src={Planejamento}></img>
              Construção e mão-de-obra
              </div>
            <div class="item">
              <img src={Obra}></img>
              Reformas e ampliações
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
