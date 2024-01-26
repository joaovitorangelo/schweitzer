import React from "react";
import "./methodology.css";

const MethodologyList = ({ items }) => (
  <div className="methodology-list">
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Methodology = () => {
  const methodologies = [
    { id: "iniciacao", name: "01", description: "Iniciação", start: ["Objetivos", "Gerente", "Prazos", "Recursos", "Viabilidade"] },
    { id: "planejamento", name: "02", description: "Planejamento", planning: ["Escopo", "Cronograma", "Custos", "Riscos", "EAP"] },
    { id: "execucao", name: "03", description: "Execução", execution: ["Ajustes", "Atualização", "Alocação da Equipe", "Execução de Tarefas", "Replanejamento"] },
    { id: "monitoramento", name: "04", description: "Monitoramento", monitoring: ["Status das Atividades", "Prazos", "Andamento"] },
    { id: "encerramento", name: "05", description: "Encerramento", closure: ["Entregas Finais", "Revisão", "Lições Aprendidas"] }
  ];

  return (
    <>
    <div className="methodology-global">
      <aside>
        <div className="projects-container">
          <h1>PROJETOS</h1>
          <ul>
            <li>Arquitetônico e complementares</li>
            <li>Estrutural</li>
            <li>Hidrossanitário</li>
            <li>Elétrico</li>
            <li>Telecomunicação</li>
            <li>Alarme de intrusão</li>
            <li>Preventivo</li>
          </ul>
        </div>
      </aside>

      <section>
        <div className="methodologies-main">
          <div className="meth">
            <h1>METODOLOGIA</h1>
            <p>Conheça as etapas de nossos serviços:</p>
          </div>
            
          <div className="methodology-container">
            {methodologies.map((meth) => (
              <div className="methodologies-card" id={meth.id} key={meth.id}>
                  <h3>{meth.name}</h3>
                <div className="methodologies-info">
                  <p>{meth.description}</p>
                </div>

                <MethodologyList items={meth.start || meth.planning || meth.execution || meth.monitoring || meth.closure} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Methodology;
