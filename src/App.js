import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Founder from './components/Founder';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ParticlesComponent from './components/Particles'

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="particles-container">
        <ParticlesComponent id="particles"></ParticlesComponent>
      </div>
      <Navbar/>
      <Home/>
      <Feature/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <Founder/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
