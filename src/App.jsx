import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactCareers from './components/ContactCareers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactCareers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
