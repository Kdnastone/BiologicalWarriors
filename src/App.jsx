// Importar librerías
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/front/routes/AppRoutes';

// Importar componentes
import data from './components/back/data/Data';
import Header from './components/front/header/Header';

// Importar estilos
import './App.css';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  /*Función para agregar productos al carrito*/
  const handleAddPd = (product) => {
    {/*Verificar si el producto ya está en el carrito*/}
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item
        )
      );
      /*Si el producto no está en el carirto, agregarlo*/
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
  /*Función para eliminar productos del carrito*/
  const handleRemovePd = (product) => {
  {/*Verificar si el producto ya está en el carrito*/}
  const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } 
    else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
        )
      );
    }
  };

  /*Fución para eliminar todos los productos del carrito*/
const handleRemoveAllPd = () => {
  setCartItems([]);
}

  /*Renderizar el componente*/
  return (
    <Router>
      <Header cartItems={cartItems}/>
      <AppRoutes 
        productItems={productItems} 
        cartItems={cartItems}
        handleAddPd={handleAddPd}
        handleRemovePd={handleRemovePd}
        handleRemoveAllPd={handleRemoveAllPd}
      />
    </Router>
  );
};

export default App;