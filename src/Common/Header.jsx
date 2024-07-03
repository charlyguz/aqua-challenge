import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="h-16 w-full bg-blue-dark text-white flex items-center justify-between px-8 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Aqua Challenge - SolarPure</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="intro" smooth={true} duration={500} className="hover:text-blue-light cursor-pointer">
              Introducción
            </Link>
          </li>
          <li>
            <Link to="infrastructure" smooth={true} duration={500} className="hover:text-blue-light cursor-pointer">
              Infraestructura
            </Link>
          </li>
          <li>
            <Link to="software" smooth={true} duration={500} className="hover:text-blue-light cursor-pointer">
              Software
            </Link>
          </li>
          <li>
            <Link to="Diferenciador" smooth={true} duration={500} className="hover:text-blue-light cursor-pointer">
            Diferenciador
            </Link>
          </li>
          <li>
            <Link to="Cost" smooth={true} duration={500} className="hover:text-blue-light cursor-pointer">
            Cost
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
