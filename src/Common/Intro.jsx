import { useSpring, animated } from '@react-spring/web';
import videoBG from '../assets/FONDOS/underwatwer.mp4';
import './Intro.css'; 
import backgroundIMG from '../assets/FONDOS/beautiful-seaside-landscape1.jpg';

const Intro = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
    delay: 200,
  });

  return (
    <section id="intro" className="relative flex justify-center items-center flex-col min-h-screen bg-cover text-white" style={{ backgroundImage: `url(${backgroundIMG})` }}>
      <div className="content z-20 mb-20">
        <div className="drop-container">
          <h1 className="text-6xl font-bold animated-title" id="intro-h1">Propuesta Solución</h1>
          <div className="drop"></div>
        </div>
      </div>
      <animated.div style={{...props, backdropFilter: 'blur(10px)'}} className="w-2/4 flex justify-center items-center flex-col text-center bg-opacity-30 bg-black rounded-md p-8">
        <p className="mb-4 text-lg ">
        Nuestra solución aborda dos desafíos críticos globales:<strong> la escasez de agua dulce y la necesidad de métodos sostenibles de desalinización.</strong>
        </p>
        <p className="mb-4 text-lg">
        La propuesta se divide en dos componentes principales que trabajan en conjunto para lograr un sistema eficiente y sostenible.
        </p>
        <ul className="mb-4">
          <strong>
            <li>Desalinización de Agua Marina</li>
            <li>Sistema de boyas Inteligentes</li>
          </strong>
        </ul>
        <p className='text-lg' >
          Juntas, estas soluciones abordan tanto la necesidad de nuevas fuentes de agua dulce como la protección de los recursos hídricos existentes.
        </p>
      </animated.div>
    </section>
  );
};

export default Intro;
