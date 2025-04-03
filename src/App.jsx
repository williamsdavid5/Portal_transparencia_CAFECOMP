import { useState } from "react";
import "./App.css";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import QuadroValores from "./components/QuadroValores/QuadroValores";

function App() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className="window">
      <MenuLateral />
      <main className={`content ${modalAberto ? "blur" : ""}`}>
        <h1>Resumo Financeiro</h1>
        <p>Aqui você pode ver os principais indicadores.</p>

        <div id="valores">
          <QuadroValores
            titulo={"Saldo atual"}
            valor={"725,50"}
            complemento={"última atualização: 03/04"}
          />
          <QuadroValores
            titulo={"Média diária"}
            valor={"15,00"}
            complemento={""}
          />
        </div>

        <div id="info">
          <p>
            O caixa do CAFECOMP é formado por arrecadações de eventos, vendas e
            contribuições diversas. Esses recursos são usados para promover
            atividades, apoiar projetos estudantis, organizar eventos e oferecer
            suporte aos alunos da FECOMP. Prezamos pela transparência, e todos
            os valores arrecadados e utilizados estão sempre acessíveis para
            consulta. Nosso objetivo é reinvestir cada centavo em benefícios
            para a comunidade acadêmica, tornando a experiência de todos mais
            rica e colaborativa.
          </p>
        </div>

        <div id="feedback">
          <p>
            Dúvidas? Reclamações? Envie um feedback e entraremos em contato!
          </p>
          <button id="botaoFeedback" onClick={() => setModalAberto(true)}>
            FEEDBACK
          </button>
        </div>
      </main>

      {/* Modal de Feedback */}
      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>FEEDBACK</h2>
            <label>Seu email</label>
            <input type="email" />
            <label>Assunto</label>
            <input type="text" />
            <textarea rows="5"></textarea>
            <p className="warning">
              Atenção: isto é uma mensagem de envio único, então revise seu
              texto antes do envio!
            </p>
            <button className="send">Enviar</button>
            <button className="cancel" onClick={() => setModalAberto(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
