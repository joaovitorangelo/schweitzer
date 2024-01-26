import House1 from "./house1.png";
import House2 from "./house2.png";
import House3 from "./house3.png";
import House4 from "./house4.png";
import House5 from "./house5.png";
import House6 from "./house6.png";
import House7 from "./house7.png";
import House8 from "./house8.png";
import House9 from "./house9.png";
import House10 from "./house10.png";
import House11 from "./house11.png";
import House12 from "./house12.png";

import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container-main">
      <div className="types-of-work">
        <nav>
          <div className="portf-paragraph">
            <h1>PORTFOLIO</h1>
            <p>Obras diferentes, metodologia única.</p>
          </div>

          <ul className="port-list">
            <li className="item-all">TODOS</li>
            <li>COMERCIAS</li>
            <li>RESIDENCIAS</li>
            <li>COMERCIAS</li>
            <li>INFERIORES</li>
            <li>REFORMAS E AMPLIAÇÕES</li>
          </ul>
        </nav>
      </div>

      <section>
        <div class="house-container-grid">
          <div class="item-house">
            <img src={House1}></img>
          </div>
          <div class="item-house">
            <img src={House2}></img>
          </div>
          <div class="item-house">
            <img src={House3}></img>
          </div>
          <div class="item-house">
            <img src={House4}></img>
          </div>
          <div class="item-house">
            <img src={House5}></img>
          </div>
          <div class="item-house">
            <img src={House6}></img>
          </div>
          <div class="item-house">
            <img src={House7}></img>
          </div>
          <div class="item-house">
            <img src={House8}></img>
          </div>
          <div class="item-house">
            <img src={House9}></img>
          </div>
          <div class="item-house">
            <img src={House10}></img>
          </div>
          <div class="item-house">
            <img src={House11}></img>
          </div>
          <div class="item-house">
            <img src={House12}></img>
          </div>
        </div>
          <div className="inpt-container">
            <input
            type="submit"
              value="CARREGAR MAIS PROJETOS"
              className="input-load"
            ></input>
          </div>
      </section>
    </div>
  );
}
