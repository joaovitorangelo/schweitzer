import "./home.css";
import Casa from "./casa.png";

import { Discover } from "../discover/Discover.jsx"
import Dream from "../dream/Dream";
import Portfolio from "../portfolio/Portfolio";
import Partnership from "../partnership/Partnership";


export default function Home() {
  return (
    <>
    <section>
      <div className="main-container">
        <div className="building-dreams">
          <h1>CONSTRUINDO SONHOS</h1>
          <p>
            Somos apaixonados por transformar ideias em construções modernas,
            sustentáveis e de qualidade.
          </p>

          <a href="/">↓ Conheça nosso trabalho</a>
        </div>
        <img src={Casa} alt="Casa"></img>
      </div>  
    </section>
      <Discover />
      <Dream />
      <Portfolio />
      <Partnership />
    </>
  );
}
