import "./challenges.css";
import Cimento from "./cimento.png";
import Eng1 from "./eng1.jpg";
import Eng2 from "./eng2.jpg";

export default function Challenges() {
  return (
    <>
      <div className="challenges-container">
        <aside>
          <div className="cement-container">
            <img src={Cimento}></img>
          </div>
        </aside>

        <section>
          <div className="challenges">
            <div className="challengesAndSolutions">
              <h2>DESAFIOS</h2>

              <p>que enfrentamos no dia a dia:</p>
            </div>

            <ul className="item-list-ch">
              <li>Tempo para a execução de atividades</li>
              <li>Alinhamento de um escopo bem definido</li>
              <li>Recursos (capitais ou humanos) reduzidos</li>
              <li>Deadline para entrega do projeto</li>
              <li>Lidar com pressão</li>
              <li>Saber administrar conflitos</li>
              <li>Lidar com egos e criar equipes</li>
              <li>Motivar pessoas e ser uma referência pelas atitudes</li>
              <li>Saber encarar o erro como uma oportunidade de aprendizado</li>
            </ul>
          </div>

          <div className="challenges">
            <div className="challengesAndSolutions">
              <h2>Soluções</h2>

              <p>que aplicamos para suplantar os desafios:</p>
            </div>

            <ul className="item-list-ch">
              <li>Foco na gestão de pessoas</li>
              <li>Assertividade no orçamento de obras</li>
              <li>Acompanhar evolução e medição de obras</li>
              <li>Fazer o planejamento de obras</li>
              <li>Controle tributário</li>
              <li>Garantir a saúde e segurança do trabalho</li>
              <li>Organizar a gestão da cadeia de suprimentos</li>
            </ul>
          </div>
        </section>
      </div>
      <section>
        <div className="who-container">
          <div>
            <h1>QUEM SOMOS</h1>
          </div>

          <div className="engineers">
            <div>
              <img src={Eng1}></img>
              <h3>Guilherme Schweitzer</h3>
              <p>Engenheiro Civil</p>
            </div>

            <div>
              <img src={Eng2}></img>
              <h3>Thaigor Vescovi Liberato</h3>
              <p>Engenheiro Eletricista</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
