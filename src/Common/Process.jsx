import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import SolarModel from '../Renders/SolarModel';
import backgroundIMG from '../assets/FONDOS/hermoso-paisaje-costero.jpg'

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <section 
      id="infrastructure" 
      className="p-8 flex flex-col items-center min-h-screen bg-cover text-black text-md"
      style={{ backgroundImage: `url(${backgroundIMG})` }}
      >
      <animated.div style={fadeIn} className="w-full flex justify-center">
        <h2 className="text-4xl font-bold mb-6">Proceso Desalinización de Agua Marina</h2>
      </animated.div>
      <div ref={ref} className="flex flex-row w-5/6 flex-grow">
        <animated.div style={fadeIn} className="w-1/3 p-4 flex flex-col justify-center">
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Proceso:</strong></li>
            <li>Utilizamos paneles heliostatos para reflejar la luz solar hacia una zona específica de la costa, calentando y evaporando el agua marina.</li>
            <li>El agua evaporada se captura y almacena en sistemas de domos plegables.</li>
            <li>La energía solar no solo sirve para evaporar el agua sino también para generar energía adicional que se utiliza en el proceso.</li>
            <li>Nos inspiramos en la planta solar Gemasolar en España, que utiliza sales fundidas para almacenar energía y generar electricidad las 24 horas del día.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-black">Funciones de las Boyas</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Monitorean constantemente la calidad del agua, salinidad, temperatura y detección de contaminantes o químicos presentes en el agua.</li>
            <li>Equipadas con cámaras y sensores, con ayuda de un modelo de Inteligencia Artificial, pueden detectar si un animal o desecho queda atorado en la red marina del sistema, asegurando que la fauna marina esté protegida en todo momento del proceso de desalinización.</li>
          </ul>
        </animated.div>
        <animated.div style={fadeIn} className="w-2/3 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
          <SolarModel />
        </animated.div>
      </div>
    </section>
  );
};

export default Process;
