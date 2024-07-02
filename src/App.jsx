import Header from './Common/Header'
import Intro from './Common/Intro'
import InfrastructureSolution from './Common/InfrastructureSolution';
import SoftwareSolution from './Common/SoftwareSolution';
import Justification from './Common/Justification';
import Evaluation from './Common/Evaluation';
import Footer from './Common/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <InfrastructureSolution />
        <SoftwareSolution />
        <Justification />
        <Evaluation />
      </main>
      <Footer />
    </>
  );
}

export default App;
