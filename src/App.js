import Services from './components/Services'; // Import the 'Services' component
import Footer from './components/Footer'; // Import the 'Footer' component
import Hero from './components/Hero'; // Import the 'Hero' component
import About from './components/About'; // Import the 'About' component
import Tours from './components/Tours'; // Import the 'Tours' component
import Navbar from './components/Navbar'; // Import the 'Navbar' component

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
