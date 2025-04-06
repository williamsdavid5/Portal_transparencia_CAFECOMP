import "./MenuLateral.css";
import { X } from "lucide-react";

function MenuLateral({ visivel, onFechar }) {
  return (
    <aside className={`menuLateral ${visivel ? "mostrar" : ""}`}>
      {visivel && (
        <button className="botaoFecharMenuMobile" onClick={onFechar}>
          <X size={30} color="white" />
        </button>
      )}

      <img src="./src/assets/images/cafecompLogo.png" alt="Logo" />
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