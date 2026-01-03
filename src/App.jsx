import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Discover from './components/Discover';
import Events from './components/Events';
import Sermons from './components/Sermons';
import Testimonials from './components/Testimonials';
import Questions from './components/Questions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Discover />
      <Events />
      <Sermons />
      <Testimonials />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
