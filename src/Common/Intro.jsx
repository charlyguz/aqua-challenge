import { useSpring, animated } from '@react-spring/web';

const Intro = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
    delay: 200,
  });

  return (
    <section id="intro" className="p-8 bg-blue-medium-dark text-white flex justify-center items-center flex-col min-h-screen">
      <animated.div style={props} className="w-2/4 flex justify-center items-center flex-col text-center">
        <h2 className="text-2xl font-bold mb-4">Propuesta Solución</h2>
        <p className="mb-4">
          Nuestra propuesta se compone de dos partes: una solución de infraestructura y una solución de software. Ambas buscan abordar diferentes aspectos de los desafíos relacionados con el agua.
        </p>
        <p className="mb-4">
          La <strong>solución de infraestructura</strong> se centra en la desalinización de agua marina utilizando energía solar.
        </p>
        <p className="mb-4">
          La <strong>solución de software</strong> se basa en la inteligencia artificial predictiva para el control y la detección de la contaminación del agua.
        </p>
        <p>
          Juntas, estas soluciones abordan tanto la necesidad de nuevas fuentes de agua dulce como la protección de los recursos hídricos existentes.
        </p>
      </animated.div>
    </section>
  );
};

export default Intro;
