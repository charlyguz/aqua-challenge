import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Boya from '../Renders/Boya';
import backgroundIMG from '../assets/FONDOS/hermoso-paisaje-costero1.jpg';
import Panel from '../Renders/Panel';
import Domo from '../Renders/Domo';

const Details = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <section
      id="details"
      className="p-8 flex flex-col items-center justify-center min-h-screen bg-cover text-white"
      style={{ backgroundImage: `url(${backgroundIMG})` }}
    >
      <div ref={ref} className="w-full h-screen flex justify-center items-center">
        {/* Paneles Helióstatos */}
        <div className="w-1/3 h-full flex flex-row">
          <div className="w-2/3 h-5/6 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
            <Panel />
          </div>
          <div className="w-1/3 h-full p-4 flex flex-col justify-center  text-white rounded-xl shadow-md">
            <h2 className="text-4xl font-bold mb-6">Paneles Helióstatos</h2>
            <h3 className="text-xl font-semibold mb-2">Función</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Reflejan la luz solar hacia una zona específica para calentar el agua marina.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Beneficio</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Utilizan energía solar renovable para el proceso de desalinización, reduciendo la dependencia de fuentes de energía no renovables.</li>
            </ul>
          </div>
        </div>

        {/* Sistemas de Domos Plegables */}
        <div className="w-1/3 h-full flex flex-row">
          <div className="w-2/3 h-5/6 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
            <Domo />
          </div>
          <div className="w-1/3 h-full p-4 flex flex-col justify-center text-white rounded-xl shadow-md">
            <h2 className="text-4xl font-bold mb-6">Sistemas de Domos Plegables</h2>
            <h3 className="text-xl font-semibold mb-2">Función</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Capturan y almacenan el agua evaporada.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Beneficio</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Permiten un almacenamiento eficiente del agua desalada, listo para su uso.</li>
            </ul>
          </div>
        </div>

        {/* Boyas Inteligentes de Monitoreo */}
        <div className="w-1/3 h-full flex flex-row">
          <div className="w-2/3 h-5/6 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
            <Boya />
          </div>
          <div className="w-1/3 h-full p-4 flex flex-col justify-center  text-white rounded-xl shadow-md">
            <h2 className="text-4xl font-bold mb-6">Boyas Inteligentes de Monitoreo</h2>
            <h3 className="text-xl font-semibold mb-2">Función</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Equipadas con sensores para monitorear la calidad del agua, salinidad, temperatura y detectar contaminantes.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Beneficio</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Proporcionan datos en tiempo real sobre la calidad del agua, ayudando a detectar y mitigar la contaminación.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
