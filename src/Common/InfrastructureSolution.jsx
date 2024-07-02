import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import SolarModel from '../Renders/SolarModel';

const InfrastructureSolution = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <section id="infrastructure" className="p-8 flex flex-col items-center min-h-screen bg-blue-very-light text-gray-dark">
      <animated.div style={fadeIn} className="w-2/3">
        <h2 className="text-2xl font-bold mb-6">Parte 1: Solución de Infraestructura</h2>
      </animated.div>
      <div ref={ref} className="flex flex-row w-full flex-grow">
        <animated.div style={fadeIn} className="w-1/3 p-4 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-dark">Desalinización de Agua Marina</h3>
          <p className="mb-4">Proponemos una solución innovadora de desalinización de agua marina utilizando energía solar. La idea es utilizar paneles heliostatos para reflejar la luz solar hacia una zona delimitada de la costa marina, calentando y evaporando el agua. Esta agua evaporada se captará y almacenará en un sistema de domos plegables. La energía solar no solo servirá para evaporar el agua sino también para generar energía adicional que se utilizará en el proceso.</p>
          <h4 className="text-lg font-semibold mb-2 text-blue-dark">Temas Abordados:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Gestión sostenible del agua y sequías</li>
            <li>Suministro de agua ante el cambio climático</li>
            <li>Conservación y acceso al agua</li>
            <li>Innovación abierta</li>
          </ul>
          <h4 className="text-lg font-semibold mb-2 text-blue-dark">Detalles Técnicos:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Paneles Heliostatos:</strong> Reflejan la luz solar hacia una zona específica para calentar el agua marina.</li>
            <li><strong>Sistemas de Domos Plegables:</strong> Capturan el agua evaporada y la almacenan.</li>
            <li><strong>Energía Solar:</strong> Se utiliza para calentar el agua y generar energía adicional para el proceso.</li>
          </ul>
          <h4 className="text-lg font-semibold mb-2 text-blue-dark">Inspiración:</h4>
          <p className="mb-4">Nos inspiramos en la planta solar Gemasolar en España, que utiliza sales fundidas para el almacenamiento de energía y puede generar electricidad durante 24 horas al día. Aplicamos una tecnología similar al proceso de desalinización del agua marina.</p>
        </animated.div>
        <animated.div style={fadeIn} className="w-2/3 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
          <SolarModel />
        </animated.div>
      </div>
    </section>
  );
};

export default InfrastructureSolution;
