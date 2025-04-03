import './QuadroValores.css'

function QuadroValores({ titulo, valor, complemento }) {
    return (
        <div className='valoresjanela'>
            <p>{titulo}</p>
            <h1>R$ {valor}</h1>
            <p>{complemento}</p>
        </div>
    )
}

export default QuadroValores;