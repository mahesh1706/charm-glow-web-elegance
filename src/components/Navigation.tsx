import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/newlogo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'packages' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Classes', id: 'classes' },
    { name: 'Contact', id: 'footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong backdrop-blur-2xl border-b border-white/20 w-full">
      <div className="max-w-7xl mx-auto safe-area-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 glass rounded-full group-hover:glow-hover transition-all duration-300 overflow-hidden p-1">
              <img src={logoImage} alt="Charm Bridals Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-playfair font-semibold text-soft-brown leading-none text-break">
                Charm Bridals
              </h1>
              <p className="text-xs text-soft-brown/70 font-inter">
                Beauty & Elegance
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-soft-brown hover:text-jewel-blue transition-colors duration-300 font-inter font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jewel-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('booking')}
              className="glass-strong border border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white px-4 lg:px-6 py-2 text-sm lg:text-base font-inter glow-hover transition-all duration-300 rounded-full whitespace-nowrap"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-soft-brown hover:text-jewel-blue"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-strong backdrop-blur-2xl border-b border-white/20 fade-in w-full">
            <div className="safe-area-padding py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-soft-brown hover:text-jewel-blue transition-colors duration-300 font-inter font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('booking')}
                className="w-full glass-strong border border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white mt-4 font-inter rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;