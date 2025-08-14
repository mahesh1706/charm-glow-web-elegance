
import { ArrowDown, Sparkles, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openInstagram = () => {
    window.open('https://instagram.com/divyaprakash_mua', '_blank', 'noopener');
  };

  useEffect(() => {
    // Preload first hero image for LCP optimization
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/hero/bridal-1.webp';
    document.head.appendChild(link);

    // Check if images are loaded
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('.hero-img img') as NodeListOf<HTMLImageElement>;
      let loadedCount = 0;
      
      images.forEach((img) => {
        if (img.complete) loadedCount++;
      });
      
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    const timer = setTimeout(checkImagesLoaded, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Layers */}
      <div className="absolute inset-0 luxury-gradient"></div>
      
      {/* Hero Image Cluster */}
      <div className="absolute inset-0 z-0">
        {/* Top Left */}
        <div 
          className="hero-img absolute top-20 left-8 md:left-16 w-24 h-32 md:w-32 md:h-40 rounded-xl shadow-lg border border-white/20 overflow-hidden is-loading"
          data-aos="fade-right" 
          data-aos-delay="320"
          style={{
            backgroundImage: 'url(/images/hero/bridal-1.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img 
            src="/images/hero/bridal-1.webp" 
            alt="Bridal look — classic elegance"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="eager"
            fetchPriority="high"
            onLoad={(e) => {
              e.currentTarget.parentElement?.classList.remove('is-loading');
              e.currentTarget.parentElement?.classList.add('is-loaded');
            }}
          />
        </div>

        {/* Top Right */}
        <div 
          className="hero-img absolute top-32 right-8 md:right-20 w-28 h-36 md:w-36 md:h-44 rounded-xl shadow-lg border border-white/20 overflow-hidden is-loading"
          data-aos="fade-left" 
          data-aos-delay="400"
          style={{
            backgroundImage: 'url(/images/hero/bridal-2.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img 
            src="/images/hero/bridal-2.webp" 
            alt="Bridal look — dewy glow"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onLoad={(e) => {
              e.currentTarget.parentElement?.classList.remove('is-loading');
              e.currentTarget.parentElement?.classList.add('is-loaded');
            }}
          />
        </div>

        {/* Bottom Left */}
        <div 
          className="hero-img absolute bottom-32 left-4 md:left-12 w-26 h-34 md:w-30 md:h-38 rounded-xl shadow-lg border border-white/20 overflow-hidden is-loading"
          data-aos="fade-right" 
          data-aos-delay="480"
          style={{
            backgroundImage: 'url(/images/hero/bridal-3.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img 
            src="/images/hero/bridal-3.webp" 
            alt="Bridal look — modern matte"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onLoad={(e) => {
              e.currentTarget.parentElement?.classList.remove('is-loading');
              e.currentTarget.parentElement?.classList.add('is-loaded');
            }}
          />
        </div>

        {/* Bottom Right */}
        <div 
          className="hero-img absolute bottom-20 right-6 md:right-16 w-24 h-32 md:w-32 md:h-40 rounded-xl shadow-lg border border-white/20 overflow-hidden is-loading"
          data-aos="fade-left" 
          data-aos-delay="560"
          style={{
            backgroundImage: 'url(/images/hero/bridal-4.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img 
            src="/images/hero/bridal-4.webp" 
            alt="Bridal look — traditional saree drape"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onLoad={(e) => {
              e.currentTarget.parentElement?.classList.remove('is-loading');
              e.currentTarget.parentElement?.classList.add('is-loaded');
            }}
          />
        </div>
      </div>
      
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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 md:p-16 backdrop-blur-3xl border border-white/30 shadow-2xl">
          <div data-aos="fade-down" data-aos-delay="60">
            <span className="inline-block px-4 py-2 rounded-full bg-jewel-blue/10 text-jewel-blue text-sm font-medium mb-6">
              Charm Bridals
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-light mb-8 text-gradient leading-tight"
            data-aos="fade-up" 
            data-aos-delay="120"
          >
            Redefining Bridal Beauty
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl text-foreground/90 font-light tracking-wide mb-10 font-inter max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="180"
          >
            with Elegance & Glow
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-jewel-blue"></div>
            <Sparkles className="w-6 h-6 text-jewel-blue" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-jewel-blue"></div>
          </div>

          {/* CTA Group */}
          <div 
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
            data-aos="fade-up" 
            data-aos-delay="260"
          >
            <Button 
              onClick={scrollToBooking}
              className="glass-strong border-2 border-jewel-blue/40 text-jewel-blue hover:bg-jewel-blue hover:text-white px-10 py-5 text-lg md:text-xl font-inter glow-hover transition-all duration-300 backdrop-blur-xl rounded-full shadow-lg hover:shadow-2xl"
            >
              Book Your Session
            </Button>
            
            <Button 
              onClick={openInstagram}
              variant="secondary"
              className="glass border-2 border-white/20 text-foreground hover:bg-white/10 px-8 py-5 text-lg md:text-xl font-inter transition-all duration-300 backdrop-blur-xl rounded-full shadow-lg hover:shadow-2xl"
              aria-label="Open Instagram in a new tab"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">DM on Instagram</span>
              <span className="sm:hidden">View Instagram</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="580">
        <div className="flex flex-col items-center">
          <ArrowDown className="w-6 h-6 text-soft-brown animate-bounce" />
          <p className="text-sm text-soft-brown mt-2 font-inter">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
