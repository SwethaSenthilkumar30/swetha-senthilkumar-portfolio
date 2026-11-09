import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        {/* Portfolio sections will be rendered here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
