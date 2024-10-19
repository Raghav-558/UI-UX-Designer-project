import Cards from "./components/comman/Cards";
import Footer from "./components/comman/Footer";
import Form from "./components/comman/Form";
import Herosection from "./components/comman/Herosection";
import Alittlebit from "./components/comman/Alittlebit";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div>
        <Herosection />
        <Cards />
        <Form />
        <Alittlebit />
        <Footer />
      </div>
    </>
  );
}

export default App;
