import Header from './Common/Header'
import Intro from './Common/Intro'
import Process from './Common/Process';
import Cost from './Common/Cost';
import Footer from './Common/Footer';
import Diferenciador from './Common/Diferenciador';
import Details from './Details/Details';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Process />
        <Details />
        <Diferenciador />
        <Cost />
      </main>
      <Footer />
    </>
  );
}

export default App;
