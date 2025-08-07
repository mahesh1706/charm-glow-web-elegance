import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong backdrop-blur-2xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center justify-center w-10 h-10 glass rounded-full group-hover:glow-hover transition-all duration-300">
              <Sparkles className="w-5 h-5 text-jewel-blue" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-playfair font-semibold text-foreground leading-none">
                Charm Bridals
              </h1>
              <p className="text-xs text-muted-foreground font-inter">
                Beauty & Elegance
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-jewel-blue transition-colors duration-300 font-inter font-medium relative group"
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
              className="glass-strong border border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white px-6 py-2 font-inter glow-hover transition-all duration-300 rounded-full"
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
              className="text-foreground hover:text-jewel-blue"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-strong backdrop-blur-2xl border-b border-white/20 fade-in">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-jewel-blue transition-colors duration-300 font-inter font-medium py-2"
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