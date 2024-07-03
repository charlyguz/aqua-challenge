import React from 'react';
import Slider from 'react-slick';
import Domo from '../../Renders/Domo';
import Panel from '../../Renders/Panel';
import Boya from '../../Renders/Boya';
import Red from '../../Renders/Red';

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="p-2 ">
          <div className="flex flex-row mb-8 bg-blue-50/[.8] p-5 rounded-xl shadow-md h-96 ">
            <div className="w-3/5 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
              <Domo />
            </div>
            <div className="flex flex-col w-2/5 h-64">
              <h2 className="text-2xl font-bold text-center text-blue-800">Sistema de Domos Plegables</h2>
              <div className="flex flex-row">
                <div className="w-1/2 pl-4 flex flex-col justify-top">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Función:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Capturan y almacenan el agua evaporada.</li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 flex flex-col justify-top text-white">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Beneficio:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Permiten un almacenamiento eficiente del agua desalada, listo para su uso.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-2">
          <div className="flex flex-row mb-8 bg-blue-50/[.8] p-5 rounded-xl shadow-md h-96">
            <div className="w-3/5 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
              <Panel />
            </div>
            <div className="flex flex-col w-2/5 h-64">
              <h2 className="text-2xl font-bold text-center text-blue-800">Paneles Helióstatos</h2>
              <div className="flex flex-row">
                <div className="w-1/2 pl-4 flex flex-col justify-top">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Función:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Reflejan la luz solar hacia una zona específica para calentar el agua marina.</li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 flex flex-col justify-top text-white">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Beneficio:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Utilizan energía solar renovable para el proceso de desalinización, reduciendo la dependencia de fuentes de energía no renovables.</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-row mb-8 bg-blue-50/[.8] p-5 rounded-xl shadow-md h-96">
            <div className="w-3/5 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
                <Boya />
            </div>
            <div className="flex flex-col w-2/5 h-64">
              <h2 className="text-xl font-bold text-center text-blue-800">Boyas Inteligentes de Monitoreo</h2>
              <div className="flex flex-row">
                <div className="w-1/2 pl-4 flex flex-col justify-top">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Función:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Equipadas con sensores para monitorear la calidad del agua, salinidad, temperatura y detectar contaminantes.</li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 flex flex-col justify-top text-white">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Beneficio:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Proporcionan datos en tiempo real sobre la calidad del agua, ayudando a detectar y mitigar la contaminación.</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-row mb-8 bg-blue-50/[.8] p-5 rounded-xl shadow-md h-96">
            <div className="w-3/5 p-4 border rounded-xl flex justify-center items-center bg-white shadow-md">
                <Red />
            </div>
            <div className="flex flex-col w-2/5 h-64">
              <h2 className="text-xl font-bold text-center text-blue-800">Red Marina</h2>
              <div className="flex flex-row">
                <div className="w-1/2 pl-4 flex flex-col justify-top">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Función:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Evita que la fauna marina se vea afectada por el proceso de desalinización.</li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 flex flex-col justify-top text-white">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Beneficio:</h3>
                  <ul className="list-disc list-inside mb-4">
                    <li className='text-bg text-blue-600'>Garantiza la protección del  ecosistema marino mientras se realiza la desalinización.</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* Añade más slides aquí */}
      </Slider>
    </div>
  );
}

export default Carrusel;
