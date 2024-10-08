// Importar librerías de React
import React from 'react';
import { Route, Routes } from 'react-router-dom';


// Importar componentes
import Products from '../Products/Products';
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Info from '../pages/Info';


const AppRoutes = ({ productItems, cartItems, handleAddPd, handleRemovePd, handleRemoveAllPd}) => {

  /*Renderizar el componente*/
  return (
    // Definir las rutas de la aplicación
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products productItems={productItems} handleAddPd={handleAddPd}/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems} handleAddPd={handleAddPd} handleRemovePd={handleRemovePd} handleRemoveAllPd={handleRemoveAllPd} />} /> 
    </Routes>
  );
};

export default AppRoutes;