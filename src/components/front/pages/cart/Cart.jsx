import React from "react";

//importar estilos
import "./cart.css";

function Cart({ cartItems, handleAddPd, handleRemovePd, handleRemoveAllPd }) {
  /*Calcular el precio total de los productos en el carrito*/
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  /*Agrupar los productos por tipo*/
  const groupedItems = cartItems.reduce((acc, item) => {
    const { type } = item;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(item);
    return acc;
  }, {});

  return (
    <div className="cart-items">
      <h2 className="cart-header">Items del Carrito</h2>
      <div className="cart-delete-all">
        {cartItems.length > 0 && (
          <button
            className="cart-delete-allBtn"
            onClick={() => handleRemoveAllPd()}>
            Eliminar todos los productos
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-empty"> El carrito está vacío</div>
      )}
      <div>
        {Object.keys(groupedItems).map((type) => (
          <div key={type}>
            <h3>{type}</h3>
            {groupedItems[type].map((item) => (
              <div key={item.id} className="cart-row">
                <div className="cart-list">
                  <img className="cart-img" src={item.image} alt={item.name} />
                  <div style={{ fontStyle: "italic" }} className="cart-name">
                    {item.name}
                  </div>
                  {/* Agregar botones de agregar y eliminar */}
                  <div className="cart-function">
                    <button className="cart-add" onClick={() => handleAddPd(item)}>
                      +
                    </button>

                    <button
                      className="cart-delete"
                      onClick={() => handleRemovePd(item)}
                    >
                      -
                    </button>
                  </div>
                  <div className="cart-price">
                    {/* Formatear el precio del producto para que tenga los separadores de miles pero sin decimales*/}
                    {item.qty} x $
                    {item.price.toLocaleString("es-CO", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}{" "}
                    COP
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="cart-total">
        Total: $
        <div className="cart-total-price">
          {/* Formatear el precio del producto para que tenga los separadores de miles pero sin decimales*/}
          {totalPrice.toLocaleString("es-CO", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}{" "}
          COP
        </div>
      </div>
    </div>
  );
}

export default Cart;