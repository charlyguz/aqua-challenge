// src/Sections/Justification.jsx
const Justification = () => {
  return (
    <section id="justification" className="p-8 bg-blue-medium-dark text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-8 text-blue-light text-center">Justificación de la Propuesta</h2>
        <p className="mb-6 text-center">
          Nuestra propuesta se destaca por varias razones que la convierten en una solución adecuada y valiosa para los desafíos relacionados con el agua:
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-light">Ecofriendly y Sostenible</h3>
          <p className="text-white">
            Nuestra solución de desalinización solar es prácticamente libre de residuos y utiliza energía renovable, protegiendo la fauna marina y reduciendo la huella de carbono.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-light">Innovación y Eficiencia</h3>
          <p className="text-white">
            Utilizamos inteligencia artificial para el monitoreo continuo de la contaminación del agua, ofreciendo una solución escalable y adaptable a diferentes regiones.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-light">Impacto Positivo y Duradero</h3>
          <p className="text-white">
            Nuestra propuesta aborda la gestión sostenible del agua y la protección de los recursos hídricos, asegurando un enfoque holístico y duradero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Justification;
