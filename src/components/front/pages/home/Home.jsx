//Importar librerías de React
import React from 'react';

//Importar estilos
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>BiologicalWarriors</h1>
      <p>
        BiologicalWarriors es un sitio dedicado a la venta de enemigos naturales, ideales para el control biológico de plagas en cultivos. 
      </p>
      <p>
        Nuestro objetivo es proporcionar especies que permitan a agricultores y entusiastas de la agricultura sostenible implementar estrategias efectivas de manejo integrado de plagas.
      </p>
      <h2>Características</h2>
      <ul className="home-list">
        <li>Catálogo de Productos: Encuentra las especies de enemigos naturales para controlar las plagas en el cultivo.</li>
        <li>Información Detallada: Cada producto incluye una descripción completa, usos, categoría y presentación de venta para facilitar tu elección.</li>
        <li>Imágenes de Productos: Visualiza cada producto a través de imágenes que muestran la especie seleccionada.</li>
        <li>Compra Fácil y Accesible: Accede a precios competitivos y adquiere los productos que necesitas de manera sencilla y rápida.</li>
      </ul>
    </div>
  );
};

export default Home;
