import "./MenuLateral.css";

function MenuLateral() {
  return (
    <aside className="menuLateral">
      <img src=".\src\assets\images\cafecompLogo.png" alt="" />
      <nav>
        <ul>
          <li className="active">Dashboard</li>
          <li>Gráficos</li>
          <li>Transações</li>
          <li>Alertas</li>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuLateral;