import React, { useState } from "react";

// Importar estilos
import "./products.css";

function Products({ productItems, handleAddPd }) {
  const [selectedType, setSelectedType] = useState("Todos");

  // Obtener los tipos únicos de productos
  const productTypes = ["Todos", ...new Set(productItems.map(item => item.type))];

  // Filtrar los productos según el tipo seleccionado
  const filteredProducts = selectedType === "Todos"
    ? productItems
    : productItems.filter(item => item.type === selectedType);

  return (
    <div className="product-catalogue">
      
      {/* Menú desplegable para seleccionar el tipo de producto */}
      <div className="filter-container">
        <label htmlFor="product-type-filter">Filtrar por tipo:</label>
        <select
          id="product-type-filter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {productTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Mapear los productos filtrados */}
      <div className="products-list">
        {filteredProducts.map((productItem, index) => (
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
              {/* Formatear el precio del producto para que tenga los separadores de miles pero sin decimales */}
              <h3>${productItem.price.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} COP</h3>
            </div>

            {/* Agregar un botón para agregar al carrito */}
            <div>
              <button
                className="add-Btn"
                onClick={() => handleAddPd(productItem)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;