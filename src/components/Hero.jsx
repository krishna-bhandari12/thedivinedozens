import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%205v50M5%2030h50%22%20stroke%3D%22%23B45309%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <span className="inline-block text-amber-700 font-medium tracking-wider uppercase text-sm mb-4 animate-fade-in">
          Welcome to Our Community
        </span>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
          The Divine Dozens
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          A community of believers united in faith, hope, and love. 
          Join us as we grow together in Christ and serve one another 
          with compassion and grace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#about" className="btn-primary">
            Learn More
          </a>
          <a href="#events" className="btn-secondary">
            Upcoming Events
          </a>
        </div>

        {/* Scripture Quote */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-amber-100">
          <p className="font-serif text-xl italic text-gray-700 mb-3">
            "For where two or three gather in my name, there am I with them."
          </p>
          <span className="text-amber-700 font-medium">— Matthew 18:20</span>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-700 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
