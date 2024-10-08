// Importar librerías de React
import React from 'react';
import { Route, Routes } from 'react-router-dom';


// Importar componentes
import Products from '../Products/Products';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Cart from '../pages/cart/Cart';
import NotFound from '../pages/notFound/NotFound';


const AppRoutes = ({ productItems, cartItems, handleAddPd, handleRemovePd, handleRemoveAllPd}) => {

  /*Renderizar el componente*/
  return (
    // Definir las rutas de la aplicación
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products productItems={productItems} handleAddPd={handleAddPd}/>} />
      <Route path="/cart" element={<Cart cartItems={cartItems} handleAddPd={handleAddPd} handleRemovePd={handleRemovePd} handleRemoveAllPd={handleRemoveAllPd} />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;