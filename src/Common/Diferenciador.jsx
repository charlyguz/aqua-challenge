import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Diferenciador = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const fadeIn1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const fadeIn2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const fadeIn3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <section id="diferenciador" className="p-8 bg-blue-medium-dark text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center flex-col m-10 w-3/4 ">
        <animated.h2 style={fadeIn1} ref={ref1} className="text-2xl font-bold mb-4">
          Ventajas del Sistema con Heliostatos y Boyas Inteligentes
        </animated.h2>
        <animated.div style={fadeIn2} ref={ref2} className="flex flex-col items-center">
          <ul className="list-disc list-inside mb-8 text-lg">
            <li><strong>Uso de Energía Renovable:</strong> Utiliza energía solar, reduciendo costos operativos y el impacto ambiental.</li>
            <li><strong>Bajo Mantenimiento:</strong> Menor necesidad de mantenimiento en comparación con otros sistemas.</li>
            <li><strong>Monitoreo Ambiental:</strong> Boyas inteligentes que permiten la detección y monitoreo de contaminantes en tiempo real, protegiendo el ecosistema marino.</li>
            <li><strong>Flexibilidad y Adaptabilidad:</strong> Sistema adaptable a diferentes regiones y necesidades específicas.</li>
            <li><strong>Generación de Energía Adicional:</strong> Aprovecha la energía solar no solo para desalinizar agua sino también para generar energía adicional.</li>
            <li><strong>Bajo Impacto en la Fauna Marina:</strong> Uso de redes marinas protectoras para minimizar el impacto en la vida marina.</li>
            <li><strong>Innovación Tecnológica:</strong> Integración de tecnologías avanzadas como heliostatos y boyas inteligentes para mejorar la eficiencia y sostenibilidad del proceso.</li>
            <li><strong>Ahorro de Energía:</strong> El uso de energía solar puede reducir los costos energéticos entre un 60% y 80% en comparación con otros métodos de desalinización convencionales.</li>
          </ul>
        </animated.div>
        <animated.h2 style={fadeIn3} ref={ref3} className="text-2xl font-bold mb-4">
          Comparativa de Sistemas de Desalinización
        </animated.h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="p-4 border border-white">Característica</th>
              <th className="p-4 border border-white">Desalinización con Heliostatos y Boyas Inteligentes</th>
              <th className="p-4 border border-white">Osmosis Inversa</th>
              <th className="p-4 border border-white">Desalinización por Destilación Multietapa (MED)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border border-white">Fuente de Energía</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Energía solar</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Energía eléctrica (mayor consumo)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Energía térmica (alta demanda de energía)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Costo de Energía</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Bajo (uso de energía solar)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Alto</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Alto</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Mantenimiento</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Bajo</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Moderado a alto</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Alto</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Impacto Ambiental</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Bajo (energía renovable y monitoreo ambiental)</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Medio (emisiones de CO₂ por consumo eléctrico)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Alto (emisiones y uso de productos químicos)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Eficiencia en Captura de Contaminantes</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Alta (monitoreo constante con boyas inteligentes)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Baja (enfoque en desalinización)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Baja (enfoque en desalinización)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Aplicabilidad Geográfica</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Alta (uso de energía solar, adaptable globalmente)</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Alta (adaptable en diversas ubicaciones)</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Baja a Moderada (necesita infraestructura robusta)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Flexibilidad del Sistema</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Alta (adaptable a distintas necesidades y ubicaciones)</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Moderada (infraestructura fija)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Baja (infraestructura fija y compleja)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Innovación Tecnológica</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Alta (uso de heliostatos y boyas inteligentes)</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Moderada (tecnología madura)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Baja (tecnología madura)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Impacto en la Fauna Marina</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Bajo (uso de red marina protectora)</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Moderado (potencial afectación por residuos químicos)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Alto (uso de productos químicos)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Generación Adicional de Energía</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">Sí (energía solar adicional)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">No</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">No</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Costo de Implementación</td>
              <td className="p-4 border border-white bg-yellow-200 text-yellow-900">Moderado (uso de energía solar y materiales específicos)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Alto (equipos y mantenimiento costoso)</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">Muy alto (infraestructura y operación costosa)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white">Ahorro de Energía</td>
              <td className="p-4 border border-white bg-green-200 text-green-900">60-80% comparado con sistemas convencionales</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">N/A</td>
              <td className="p-4 border border-white bg-red-200 text-red-900">N/A</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      
    </section>
  );
};

export default Diferenciador;
