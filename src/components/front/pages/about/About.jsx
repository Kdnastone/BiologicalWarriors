//Importar librerías de React
import React from 'react'

//Importar estilos
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h1>Nuestra Historia</h1>
      <p>
      BiologicalWarriors surge como respuesta a la creciente necesidad de distribuir enemigos naturales capaces de controlar plagas de manera eficiente, reduciendo significativamente el uso de insecticidas en la agricultura moderna. Al observar los efectos negativos que los químicos tenían no solo en los cultivos, sino también en la salud de los agricultores y los consumidores, decidimos tomar acción. Fundada por un equipo de expertos en control biológico y sostenibilidad, nuestra misión ha sido desde el principio ofrecer alternativas naturales que mejoren la calidad de vida de las personas y del medio ambiente.
      </p>
      <p>
      Con el paso del tiempo, hemos visto los enormes beneficios de incorporar enemigos naturales en los sistemas de manejo de plagas. Desde la mejora de la salud del suelo hasta la reducción de la contaminación ambiental, nuestros productos garantizan no solo un rendimiento agrícola óptimo, sino también una armonía con la naturaleza.
      </p>

      <h1>Nuestros Productos</h1>
      <p>
      En BiologicalWarriors, ponemos a tu disposición una amplia gama de enemigos naturales que permiten a los agricultores controlar eficazmente las plagas. Nuestro catálogo incluye:
      </p>
      <ul className="about-list">
        <li>Depredadores: Estas especies se alimentan de insectos plaga como pulgones, ácaros y otros insectos dañinos.</li>
        <li>Parasitoides: Son insectos que parasitan ainsectos poniendo sus huevos al interior o sobre las plagas para su desarrollo.</li>
        <li>INematodos entomopatógenos: Estos organismos microscópicos que infectan y matan a las plagas del suelo, protegiendo las raíces y mejorando la salud del cultivo.</li>
      </ul>
      <p>
      Cada uno de nuestros productos ha sido seleccionado cuidadosamente para garantizar la máxima eficacia y seguridad en los cultivos.
      </p>


      <h1>Nuestro Equipo</h1>
      <p>
      El equipo de BiologicalWarriors está compuesto por un grupo multidisciplinario de biólogos, ingenieros agrónomos y expertos en control biológico que comparten una pasión común: promover una agricultura sostenible. Trabajamos de cerca con productores y científicos para desarrollar y perfeccionar nuestros productos, asegurándonos de que estén respaldados por la investigación más actualizada y probada en el campo.
      </p>
      <p>
      Nuestro compromiso no es solo proporcionar soluciones efectivas, sino también educar y acompañar a nuestros clientes en la implementación de estas prácticas. Creemos firmemente que, al trabajar juntos, podemos reducir la dependencia de los pesticidas químicos y contribuir a un futuro más saludable y sostenible para todos.
      </p>

    </div>
  );
};

export default About