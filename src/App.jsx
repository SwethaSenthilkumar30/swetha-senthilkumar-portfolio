import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <Hero />
      <main className="flex-1">
        {/* Additional portfolio sections will follow */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
