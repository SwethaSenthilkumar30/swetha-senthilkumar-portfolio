import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <main className="flex-1">
        {/* Remaining sections will follow */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
