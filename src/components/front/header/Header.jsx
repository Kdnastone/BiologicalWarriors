//Importar librerías de React
import React from "react";
import { Link } from "react-router-dom";

//Importar componentes

//Importar estilos
import "./header.css";

const Header = ({cartItems}) => {
  return (
    <div>
        {/*crear un header con un h1 que contenga un Link a la página principal */}
      <header className="header">
        <div>
          <h1>
            <Link to="/info" className="info">
              Biological Warriors
            </Link>
          </h1>
        </div>

        {/*crear un ul con 4 li, cada uno con un Link a una página diferente*/} 
        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/cart" className="cart">
              
              {/*crear un img con un src que contenga un carrito de compras y un alt que diga Carrito de Compras*/}
              <img
                  src="./cart.svg"
                  alt="Carrito de Compras"
                  style={{ width: "30px", height: "30px", marginRight: "5px" }}/>

              {/*crear un span que contenga la cantidad de elementos en el carrito*/}
              <span className="cart-count">{cartItems.length === 0? "" : cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
