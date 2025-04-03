import { useState } from 'react'
import './App.css'
import MenuLateral from './components/MenuLateral/MenuLateral'
import QuadroValores from './components/QuadroValores/QuadroValores'

function App() {
  return (
    <div className='window'>
      <MenuLateral />
      <main className='content'>
        <h1>Resumo Financeiro</h1>
        <p>Aqui você pode ver os principais indicadores.</p>
        <div id='valores'>
          <QuadroValores titulo={'Saldo atual'} valor={'725,50'} complemento={'última atualização: 03/04'} />
          <QuadroValores titulo={'Média diária'} valor={'15,00'} complemento={''} />
        </div>
        <div id='info'>
          <p>O caixa do CAFECOMP é formado por arrecadações de eventos, vendas e contribuições diversas. Esses recursos são usados para promover atividades, apoiar projetos estudantis, organizar eventos e oferecer suporte aos alunos da FECOMP. Prezamos pela transparência, e todos os valores arrecadados e utilizados estão sempre acessíveis para consulta. Nosso objetivo é reinvestir cada centavo em benefícios para a comunidade acadêmica, tornando a experiência de todos mais rica e colaborativa.</p>
        </div>
        <div>
          <p>Dúvidas? Reclamações? Envie um feedback e entraremos em contato!</p>
          <button id='botaoFeedback'>FEEDBACK</button>
        </div>
      </main>
    </div>
  )
}

export default App
