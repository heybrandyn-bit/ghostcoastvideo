import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;