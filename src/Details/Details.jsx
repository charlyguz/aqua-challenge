import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Boya from '../Renders/Boya';
import backgroundIMG from '../assets/FONDOS/hermoso-paisaje-costero1.jpg';
import Panel from '../Renders/Panel';
import Domo from '../Renders/Domo';
import gifIA from '../assets/gifIA.gif';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carrusel } from '../assets/components/Carrusel';


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
      className="p-8 flex flex-col items-center justify-center  bg-cover text-white"
      style={{ backgroundImage: `url(${backgroundIMG})` }}
    >
      <animated.div style={fadeIn} ref={ref} className="w-full flex flex-col justify-center items-center  ">
        <h1 className='text-4xl font-bold mb-5 ' >Detalles Técnicos de Cada Componente</h1>
      <Carrusel />


        {/* Boyas Inteligentes de Monitoreo */}
        {/* <div className="w-full flex flex-row mb-8 bg-blue-50/[.8] p-5 rounded-xl shadow-md">
          <div className="w-1/3 border rounded-xl flex   shadow-md">
            <div className="flex flex-col w-full  ">
              <div className="p-4 bg-white h-1/3  rounded-xl">
                <Boya />
              </div>

              <div className="p-4 h-2/3 mt-1 ">
                <h4 className='text-center text-2xl text-blue-700 font-bold' >Equipadas con Inteligencia Artificial</h4>
                <p className=' text-black ' >
                  Las boyas estan equipadas con un modelo de inteligencia artificial el cual le permite detectar residuos y 
                  animales que podrian quedar atrapados en la red marina, alertando al usuario, de esta manera se garantiza la proteccion
                  de la funa marina durante el proceso de desalinización.
                </p>

                <div className="flex flex-row pt-2">
                  <img src={gifIA} alt="My GIF" className="w-1/2 h-auto" />
                  <div className="flex flex-col w-1/2 px-2">
                    <p className=' text-slate-700 ' >
                      El modelo fue creado por nosotros y fue probado en un video de youtube subido por el canal RadioPatrullaTV
        
                    </p>
                    <a href='https://www.youtube.com/watch?v=yQwimKX3nvQ&t=34s&ab_channel=RadioPatrullaTV'target='_blank' rel='Link' className='text-blue-600' >Link del video original</a>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
          
          <div className="flex flex-col w-2/3 h-92">
            <h2 className="text-5xl font-bold mb-6 text-center text-blue-800">Boyas Inteligentes de Monitoreo</h2>
            <div className="flex flex-row">
              <div className="w-1/2 p-4 flex flex-col justify-top text-white">
                <h3 className="text-3xl font-semibold mb-2 text-blue-700 ">Función:</h3>
                <ul className="list-disc list-inside mb-4">
                  <li className='text-xl text-blue-600  mt-1' >
                    Equipadas con sensores para monitorear la calidad del agua, salinidad, temperatura y detectar contaminantes.
                  </li>
                  <li className='text-xl text-blue-600   mt-1' >
                    Detección de derrames de petróleo y otros contaminantes para proteger el medio ambiente marino.
                  </li>
                  <li className='text-xl text-blue-600   mt-1' >
                    Estudio de la dispersión superficial de partículas flotantes como larvas de peces, vertidos de petróleo o residuos marinos.
                  </li>
                  <li className='text-xl text-blue-600   mt-1' >
                    Equipadas con IA para detección de animales en el sistema de la planta para proteger la fauna marina.
                  </li>
                  
                </ul>
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-top text-white">
                <h3 className="text-3xl font-semibold mb-2 text-blue-700">Beneficio:</h3>
                <ul className="list-disc list-inside mb-4">
                  <li className='text-xl text-blue-600 mt-1' >Proporcionan datos en tiempo real sobre la calidad del agua, ayudando a detectar y mitigar la contaminación.</li>
                  <li className='text-xl text-blue-600 mt-1' >Proteccion de fauna marina.</li>
                  <li className='text-xl text-blue-600 mt-1' >Puede ser usado para fines especificos particulares a la planta.</li>
                  <li className='text-xl text-blue-600 mt-1' >Deteccion de descargas ilegales de residuos en rios y costas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}



      </animated.div>
    </section>
  );
}

export default Details;
