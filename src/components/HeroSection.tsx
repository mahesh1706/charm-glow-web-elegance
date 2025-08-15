
import { ArrowDown, Sparkles, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
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

    // Initialize image load animations
    const initImageAnimations = () => {
      document.querySelectorAll('.hero-img img').forEach((img: HTMLImageElement) => {
        const wrap = img.closest('.hero-img');
        if (wrap) wrap.classList.add('is-loading');
        if (img.complete) {
          wrap && wrap.classList.replace('is-loading', 'is-loaded');
        } else {
          img.addEventListener('load', () => {
            wrap && wrap.classList.replace('is-loading', 'is-loaded');
          }, { once: true });
        }
      });
    };

    const timer = setTimeout(initImageAnimations, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Layers */}
      <div className="absolute inset-0 luxury-gradient"></div>
      
      {/* Hero Image Cluster */}
      <div className="absolute inset-0 z-0">
        {/* Top Left - Hidden on mobile */}
        <div 
          className="hero-img hidden sm:block absolute top-16 left-8 md:left-12 lg:left-16 overflow-hidden is-loading hero-img--desktop-only"
          data-aos="fade-right" 
          data-aos-delay="340"
          style={{
            width: 'clamp(96px, 32vw, 140px)',
            aspectRatio: '3/4'
          }}
        >
          <img 
            src="https://i.postimg.cc/RVmWzBND/image.png" 
            alt="Bridal look — classic elegance"
            className="w-full h-full object-cover"
            width="140"
            height="187"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Top Right */}
        <div 
          className="hero-img absolute top-20 right-8 sm:right-12 md:right-16 lg:right-20 overflow-hidden is-loading"
          data-aos="fade-left" 
          data-aos-delay="420"
          style={{
            width: 'clamp(96px, 32vw, 200px)',
            aspectRatio: '3/4'
          }}
        >
          <img 
            src="https://i.postimg.cc/HsWT2sJd/image.png" 
            alt="Bridal look — dewy glow"
            className="w-full h-full object-cover"
            width="200"
            height="267"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Bottom Left */}
        <div 
          className="hero-img absolute bottom-24 left-6 sm:left-8 md:left-12 lg:left-16 overflow-hidden is-loading"
          data-aos="fade-right" 
          data-aos-delay="500"
          style={{
            width: 'clamp(96px, 32vw, 200px)',
            aspectRatio: '3/4'
          }}
        >
          <img 
            src="https://i.postimg.cc/TPMStCkg/image.png" 
            alt="Bridal look — modern matte"
            className="w-full h-full object-cover"
            width="200"
            height="267"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Bottom Right - Hidden on mobile */}
        <div 
          className="hero-img hidden md:block absolute bottom-16 right-8 md:right-12 lg:right-16 overflow-hidden is-loading hero-img--desktop-only"
          data-aos="fade-left" 
          data-aos-delay="580"
          style={{
            width: 'clamp(120px, 22vw, 200px)',
            aspectRatio: '3/4'
          }}
        >
          <img 
            src="https://i.postimg.cc/TYK4GZFn/image.png" 
            alt="Bridal look — traditional saree drape"
            className="w-full h-full object-cover"
            width="200"
            height="267"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      
      {/* Floating Glass Elements - Hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-20 left-20 w-32 h-32 glass rounded-full float-animation opacity-30"></div>
      <div className="hidden md:block absolute top-40 right-32 w-24 h-24 glass-strong rounded-lg rotate-45 float-animation opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="hidden lg:block absolute bottom-32 left-1/4 w-20 h-20 glass rounded-full float-animation opacity-35" style={{ animationDelay: '2s' }}></div>
      <div className="hidden md:block absolute bottom-40 right-20 w-28 h-28 glass-strong rounded-full float-animation opacity-30" style={{ animationDelay: '0.5s' }}></div>

      {/* Sparkle Effects */}
      <div className="absolute top-1/4 left-1/3">
        <Sparkles className="w-6 h-6 text-jewel-blue opacity-60 glow-animation" />
      </div>
      <div className="absolute top-3/4 right-1/4">
        <Sparkles className="w-4 h-4 text-champagne opacity-70 glow-animation" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center page-container max-w-5xl mx-auto">
        <div className="glass-strong rounded-3xl p-6 md:p-16 backdrop-blur-3xl border border-white/30 shadow-2xl w-full max-w-[min(960px,100%)]">
          <div data-aos="fade-down" data-aos-delay="60">
            <span className="inline-block px-4 py-2 rounded-full bg-jewel-blue/10 text-jewel-blue text-sm font-medium mb-6">
              Charm Bridals
            </span>
          </div>
          
          <h1 
            className="fluid-text-hero font-playfair font-light mb-6 md:mb-8 text-gradient leading-tight"
            data-aos="fade-up" 
            data-aos-delay="140"
          >
            Redefining Bridal Beauty
          </h1>
          
          <p 
            className="fluid-text-medium text-foreground/90 font-light tracking-wide mb-8 md:mb-10 font-inter max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="220"
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
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <Button 
              onClick={scrollToBooking}
              className="glass-strong border-2 border-jewel-blue/40 text-jewel-blue hover:bg-jewel-blue hover:text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-inter glow-hover transition-all duration-300 backdrop-blur-xl rounded-full shadow-lg hover:shadow-2xl w-full sm:w-auto max-w-xs"
            >
              Book Your Session
            </Button>
            
            <Button 
              onClick={openInstagram}
              variant="secondary"
              className="glass border-2 border-white/20 text-foreground hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-inter transition-all duration-300 backdrop-blur-xl rounded-full shadow-lg hover:shadow-2xl w-full sm:w-auto max-w-xs"
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
