// src/Sections/SoftwareSolution.jsx
const SoftwareSolution = () => {
  return (
    <section id="software" className="p-8 bg-gray-dark text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-2/3 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-blue-light text-center">Parte 2: Solución de Software</h2>
        <p className="mb-6 text-center">
          Proponemos una solución basada en inteligencia artificial para detectar y combatir la contaminación del agua. Utilizando imágenes satelitales y algoritmos avanzados, nuestro sistema puede identificar islas de basura y descargas ilegales de desechos en vastas áreas oceánicas, permitiendo una monitorización y respuesta más efectivas a los problemas de contaminación.
        </p>
        <p className="mb-6 text-center">
          Además, implementamos un sistema de boyas para el monitoreo de agentes contaminantes. Estas boyas están equipadas con sensores avanzados y tecnologías de comunicación para proporcionar datos en tiempo real sobre la calidad del agua.
        </p>
      </div>
      <div className="bg-blue-medium-dark p-6 rounded-lg shadow-md w-2/3 mt-8">
        <h3 className="text-xl font-semibold mb-6 text-white text-center">Funcionalidad de las Boyas para Monitoreo de Agentes Contaminantes</h3>
        <ul className="list-disc list-inside text-white">
          <li className="mb-4"><strong>Detección de Descargas Ilegales de Residuos:</strong> Las boyas pueden identificar y alertar sobre descargas no autorizadas en cuerpos de agua, permitiendo una acción rápida.</li>
          <li className="mb-4"><strong>Monitoreo de Contaminantes en Flujos de Agua:</strong> Las boyas monitorean continuamente los niveles de diversos contaminantes, proporcionando datos esenciales para la gestión de la calidad del agua.</li>
          <li className="mb-4"><strong>Vigilancia Costera:</strong> Mientras se realiza la desalinización del agua, las boyas vigilan las áreas costeras para garantizar que el proceso no se vea afectado por contaminantes externos.</li>
        </ul>
      </div>
    </section>
  );
};

export default SoftwareSolution;
