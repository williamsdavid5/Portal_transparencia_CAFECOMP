import './MenuLateral.css';

function MenuLateral() {
    return (
        <aside className='menuLateral'>
            <img src=".\src\assets\cafecompLogo.png" alt="" />
            <a href="" className='active'>Dashboard</a>
            <a href="">Gráficos</a>
            <a href="">Transações</a>
            <a href="">Alertas</a>
        </aside>
    )
}

export default MenuLateral;