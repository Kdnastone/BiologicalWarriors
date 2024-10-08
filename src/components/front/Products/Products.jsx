// Importar librerías de React
import React from "react";

// Importar estilos
import "./products.css";

function Products({ productItems, handleAddPd }) {
  return (
    <div className="product-catalogue">
      {/* Mapear los productos */}
      {productItems.map((productItem, index) => (
        <div className="card" key={index}>
          {/* Mostrar la imagen del producto */}
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>

          {/* Mostrar el nombre, la descripción y el precio del producto */}
          <div className="product-name">
            <h3 style={{ fontStyle: "italic" }}>{productItem.name}</h3>
          </div>

          {/* Agregar el tipo del producto */}
          <div className="product-type">
            <h4>{productItem.type}</h4>
          </div>

          {/* Agregar la descripción del producto */}
          <div className="product-descr">
            <h4>{productItem.salesPresentation}</h4>
          </div>

          {/* Agregar el precio del producto */}
          <div className="product-price">
          {/* Formatear el precio del producto para que tenga los separadores de miles pero sin decimales*/}
          <h3>${productItem.price.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} COP</h3>
          </div>

          {/* Agregar un botón para agregar al carrito */}
          <div>
            <button
              className="add-Btn"
              onClick={() => handleAddPd(productItem)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
