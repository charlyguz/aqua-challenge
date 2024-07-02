// src/Sections/Evaluation.jsx
const Evaluation = () => {
  return (
    <section id="evaluation" className="p-8 bg-gray-light text-gray-dark min-h-screen flex flex-col items-center justify-center">
      <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-8 text-blue-dark text-center">Evaluación de la Propuesta</h2>
        <p className="mb-6 text-justify">
          Nuestra solución es práctica y realizable. Los recursos necesarios están al alcance y no conllevarían una inversión exorbitante.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-dark">Viabilidad y Factibilidad</h3>
          <p className="text-gray-dark">
            La solución es práctica y realizable. Los recursos necesarios están al alcance y no conllevarían una inversión exorbitante. Como tecnología, tenemos la capacidad de desarrollarla y tiempo para llevarla a cabo. El equipo tiene la capacidad para llevar a cabo el proyecto y, con apoyo, no habría muchas barreras significativas que impidan su realización.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-dark">Innovación y Disrupción</h3>
          <p className="text-gray-dark">
            La solución ofrece una combinación única de tecnologías existentes (energía solar y IA) aplicadas de manera innovadora para resolver problemas de agua. La propuesta tiene el potencial de transformar las prácticas actuales de desalinización y monitoreo de contaminación.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-dark">Escalabilidad y Ampliación del Potencial</h3>
          <p className="text-gray-dark">
            Ambas soluciones tienen un alto potencial de crecimiento y expansión. La desalinización mediante energía solar puede adaptarse a diferentes regiones costeras, y el sistema de IA puede aplicarse globalmente para el monitoreo de océanos y otros cuerpos de agua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
