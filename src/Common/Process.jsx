import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import SolarModel from '../Renders/SolarModel';
import backgroundIMG from '../assets/FONDOS/hermoso-paisaje-costero.jpg'
import gifIA from '../assets/gifIA.gif';

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
      className="p-8 flex flex-col items-center h-100 bg-cover text-black text-md"
      style={{ backgroundImage: `url(${backgroundIMG})` }}
      >
      <animated.div style={fadeIn} className="w-full flex justify-center">
        <h2 className="text-4xl font-bold mb-6 text-white ">Proceso Desalinización de Agua Marina</h2>
      </animated.div>
      <div ref={ref} className="flex flex-row w-full flex-grow">
        <animated.div style={fadeIn} className="w-1/2 p-4 flex flex-col justify-top">
        <div className="bg-white/[0.7] rounded-xl p-5 ">
        <h3 className="mb-2 text-2xl text-blue-800 font-bold text-center ">Proceso de la Planta</h3>

          <ul className="list-disc list-inside mb-4">
            <li>Utilizamos paneles heliostatos para reflejar la luz solar hacia una zona específica de la costa, calentando y evaporando el agua marina.</li>
            <li>El agua evaporada se captura y almacena en sistemas de domos plegables.</li>
            <li>La energía solar no solo sirve para evaporar el agua sino también para generar energía adicional que se utiliza en el proceso.</li>
            <li>Nos inspiramos en la <strong> planta solar Gemasolar en España </strong>, que utiliza sales fundidas para almacenar energía y generar electricidad las 24 horas del día.</li>
          </ul>
        </div>

        <div className="bg-white/[0.7] rounded-xl p-5 mt-5 ">
        <h3 className="mb-2 text-2xl text-blue-800 font-bold text-center ">Funciones de las Boyas</h3>
          <div className="flex flex-row justify-between ">
                  <div className="flex flex-col w-2/3">
                  <ul className="list-disc list-inside ">
                    <li>Monitorean constantemente la calidad del agua, salinidad, temperatura y detección de contaminantes o químicos presentes en el agua.</li>
                    <li>Equipadas con cámaras y sensores, con ayuda de un <strong> modelo de Inteligencia Artificial </strong>, pueden detectar si un animal o desecho queda atorado en la red marina del sistema, asegurando que la fauna marina esté protegida en todo momento del proceso de desalinización.</li>
                  </ul>
                    
                  </div>
                  <img src={gifIA} alt="My GIF" className="w-1/3 h-auto rounded-xl " />

                  
                </div>
                <p className=' text-slate-700 text-xs ' >
                      El modelo fue creado por nosotros y fue probado en un video de youtube subido por el canal RadioPatrullaTV 
                      <a href='https://www.youtube.com/watch?v=yQwimKX3nvQ&t=34s&ab_channel=RadioPatrullaTV'target='_blank' rel='Link' className='text-blue-600 ml-1' >Link del video original</a>
        
                    </p>
        </div>
          
         
        </animated.div>
        <animated.div style={fadeIn} className="w-1/2 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md ">
          <SolarModel />
        </animated.div>
      </div>
    </section>
  );
};

export default Process;
