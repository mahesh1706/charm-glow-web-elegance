
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 luxury-gradient"></div>
      
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 glass rounded-full float-animation opacity-30"></div>
      <div className="absolute top-40 right-32 w-24 h-24 glass-strong rounded-lg rotate-45 float-animation opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 glass rounded-full float-animation opacity-35" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-20 w-28 h-28 glass-strong rounded-full float-animation opacity-30" style={{ animationDelay: '0.5s' }}></div>

      {/* Sparkle Effects */}
      <div className="absolute top-1/4 left-1/3">
        <Sparkles className="w-6 h-6 text-jewel-blue opacity-60 glow-animation" />
      </div>
      <div className="absolute top-3/4 right-1/4">
        <Sparkles className="w-4 h-4 text-champagne opacity-70 glow-animation" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1200">
        <div className="glass-strong rounded-3xl p-12 backdrop-blur-2xl">
          <h1 className="text-6xl md:text-8xl font-playfair font-light mb-6 text-gradient">
            Charm Bridals
          </h1>
          <p className="text-xl md:text-2xl text-soft-brown font-light tracking-wide mb-8 font-inter">
            Redefining Bridal Beauty with Elegance & Glow
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-jewel-blue"></div>
            <Sparkles className="w-6 h-6 text-jewel-blue" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-jewel-blue"></div>
          </div>

          <Button 
            onClick={scrollToBooking}
            className="glass-strong border-2 border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white px-8 py-4 text-lg font-inter glow-hover transition-all duration-300 backdrop-blur-xl rounded-full"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1500">
        <div className="flex flex-col items-center">
          <ArrowDown className="w-6 h-6 text-soft-brown animate-bounce" />
          <p className="text-sm text-soft-brown mt-2 font-inter">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
