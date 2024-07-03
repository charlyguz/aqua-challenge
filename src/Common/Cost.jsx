import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import videoBG from '../assets/FONDOS/Drip-Drop.mp4';

const Cost = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <section id="cost" className="relative p-8 min-h-screen flex flex-col items-center justify-center bg-gray-light text-gray-dark overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover"
      >
        <source src={videoBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <animated.div style={{...fadeIn, backdropFilter: 'blur(10px)'}} ref={ref} className="w-3/4 flex flex-col items-center bg-opacity-30 bg-black rounded-md p-8 z-10 text-white">
        <h2 className="text-2xl font-bold mb-4">Estimación de Costos para la Producción de Nuestra Solución de Desalinización</h2>
        <p className="text-lg mb-4">
          Para proporcionar una visión realista sobre los costos de implementación de nuestro sistema de desalinización basado en heliostatos y boyas inteligentes, hemos recopilado información sobre los rangos de precios y costos asociados con estos sistemas.
        </p>
        <h3 className="text-xl font-semibold mb-2">Desalinización con Heliostatos y Boyas Inteligentes</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Paneles Heliostatos:</strong> El costo de los materiales necesarios para un sistema de heliostatos puede ser bastante bajo, utilizando materiales comunes y económicos. Para una unidad de 1 metro cuadrado, los costos pueden estar en el rango de $10-$50.</li>
          <li><strong>Domos Plegables:</strong> Estos sistemas de captura y almacenamiento de agua evaporada son eficientes y de bajo costo, generalmente incluidos dentro del costo del sistema de heliostatos.</li>
          <li><strong>Boyas Inteligentes:</strong> Equipadas con sensores avanzados para monitoreo, los costos pueden variar significativamente dependiendo de la cantidad y tipo de sensores, con un rango de precios estimado entre $1000 y $3000 por boya.</li>
          <li><strong>Costo Total Aproximado:</strong> Implementar un sistema completo de 1 metro cuadrado con boyas inteligentes puede oscilar entre $5000 y $10000, considerando costos de instalación, mantenimiento y tecnología avanzada utilizada.</li>
        </ul>
      </animated.div>
    </section>
  );
};

export default Cost;
