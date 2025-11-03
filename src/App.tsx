import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />

      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Try Free (No Card Needed)
        </button>
      </div>
    </div>
  );
}

export default App;
