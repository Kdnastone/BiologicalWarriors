// Importar librerías de React
import React from 'react';

// Importar estilos
import './NotFound.css'; 

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Página No Encontrada</h1>
      <p>La página que está buscando No Existe.</p>
      <button className="return-home" onClick={() => window.location.href = '/'}>
        Regreso a la página Principal
      </button>
    </div>
  );
};

export default NotFound;
