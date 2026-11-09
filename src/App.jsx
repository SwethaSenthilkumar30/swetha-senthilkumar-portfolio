import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <Hero />
      <About />
      <main className="flex-1">
        {/* Further sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
