import './App.css';
import Cards from './components/comman/Cards';
import Footer from './components/comman/Footer';
import Form from './components/comman/Form';
import Herosection from './components/comman/Herosection';
import Sectionthird from './components/comman/Sectionthird';

function App() {
  return (
    <>
      <div>
        <Herosection />
        <Cards />
        <Sectionthird />
        <Form />
        <Footer/>
      </div>
    </>
  );
}

export default App;
