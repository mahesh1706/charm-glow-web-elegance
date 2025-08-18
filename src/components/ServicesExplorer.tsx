import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

// Data types
type ServiceItem = { 
  id: string; 
  name: string; 
  price: number | { min: number; max?: number }; 
  note?: string; 
};

type ServiceCategory = { 
  key: string; 
  title: string; 
  blurb?: string; 
  items: ServiceItem[] 
};

// Service data
const SERVICES: ServiceCategory[] = [
  {
    key: "threading",
    title: "Threading",
    items: [
      { id: "threading", name: "Threading", price: 50 },
      { id: "upper-lip", name: "Upper lip", price: 20 },
      { id: "lower-chin", name: "Lower chin", price: 20 },
    ],
  },
  {
    key: "detan-bleach",
    title: "Detan & Bleach",
    items: [
      { id: "detan", name: "Detan", price: 300 },
      { id: "bleach-fruit", name: "Bleach (Fruit)", price: 350 },
      { id: "bleach-gold", name: "Gold bleach", price: 450 },
      { id: "bleach-diamond", name: "Diamond bleach", price: 450 },
    ],
  },
  {
    key: "facials",
    title: "Facials (Acupressure)",
    blurb: "All facials include acupressure points and stress-relieving massage for an inbuilt glow.",
    items: [
      { id: "fruit-facial", name: "Fruit facial", price: 800 },
      { id: "fruit-backneck-add", name: "Back-neck massage (add-on)", price: 200, note: "Add-on to Fruit facial" },
      { id: "badam", name: "Badam facial", price: 1000 },
      { id: "chocolate", name: "Chocolate facial", price: 1200 },
      { id: "herbal", name: "Herbal facial", price: 1200 },
      { id: "bridal-gold", name: "Bridal gold facial", price: 2000 },
      { id: "bridal-pearl", name: "Bridal pearl facial", price: 2000 },
      { id: "bridal-diamond", name: "Bridal diamond facial", price: 2000 },
      { id: "galvanic", name: "Galvanic facial", price: 2000 },
      { id: "pimple-treat", name: "Pimple treatment facial", price: 2000 },
      { id: "hydra-basic", name: "Hydra facial (basic)", price: 2000, note: "Includes skin treatment" },
      { id: "hydra-mda", name: "Hydra with MDA", price: 2500, note: "Includes skin treatment" },
      { id: "hydra-peel", name: "Hydra with peel", price: 3500, note: "Includes skin treatment" },
      { id: "hydra-3mask", name: "Hydra with 3 masks", price: 4500, note: "Includes skin treatment" },
      { id: "melasma-peel", name: "Melasma treatment peel", price: 1000 },
      { id: "chemical-peel", name: "Chemical peels", price: 2000 },
    ],
  },
  {
    key: "haircuts",
    title: "Haircuts & Styling",
    blurb: "For 4 steps included; >5 steps add ₹100. Basic hair setting included. Blow-dry add ₹400.",
    items: [
      { id: "cut-straight", name: "Straight cut", price: 200 },
      { id: "cut-u", name: "U cut", price: 250 },
      { id: "cut-v", name: "V cut", price: 250 },
      { id: "cut-step", name: "Step cut", price: 550, note: "4 steps; >5 +₹100" },
      { id: "cut-feather", name: "Feather cut", price: 550 },
      { id: "cut-layer", name: "Layer cut", price: 550 },
      { id: "cut-graduation", name: "Graduation cut", price: 650 },
      { id: "cut-butterfly", name: "Butterfly cut", price: 650 },
      { id: "add-blowdry", name: "Blow-dry setting (add-on)", price: 400 },
    ],
  },
  {
    key: "mani-pedi",
    title: "Mani-Pedi & Care",
    items: [
      { id: "pedicure-massage", name: "Pedicure with massage", price: 650 },
      { id: "manicure-massage", name: "Manicure with massage", price: 450 },
      { id: "dtan-hands", name: "Detan (hands) add-on", price: 400 },
      { id: "dtan-legs", name: "Detan (legs) add-on", price: 600 },
      { id: "bleach-hands", name: "Bleach (hands)", price: 600 },
      { id: "bleach-legs", name: "Bleach (legs)", price: 800 },
      { id: "crystal-pedicure", name: "Crystal pedicure", price: 1200 },
      { id: "earlobe", name: "Earlobe", price: 1000 },
    ],
  },
  {
    key: "waxing",
    title: "Waxing (Rica)",
    items: [
      { id: "wax-underarms", name: "Underarms", price: 100 },
      { id: "wax-hands-rica", name: "Hands (Rica)", price: 350 },
      { id: "wax-legs-rica", name: "Legs (Rica)", price: 450 },
    ],
  },
  {
    key: "massage-oils",
    title: "Head Massage & Oils",
    items: [
      { id: "massage-coconut", name: "Head massage (coconut oil)", price: 350 },
      { id: "massage-herbal", name: "Head massage (herbal oil)", price: 450 },
    ],
  },
  {
    key: "henna-color",
    title: "Henna & Hair Color",
    items: [
      { id: "henna", name: "Henna (prepped & application)", price: { min: 350, max: 600 }, note: "~approx" },
      { id: "dye-roots", name: "Dye application (roots)", price: 250 },
      { id: "dye-full", name: "Full hair dye", price: { min: 300, max: 500 }, note: "~approx" },
    ],
  },
];

// Helper functions
const formatPrice = (price: number | { min: number; max?: number }): string => {
  if (typeof price === 'number') {
    return `₹${new Intl.NumberFormat('en-IN').format(price)}`;
  }
  return price.max 
    ? `₹${new Intl.NumberFormat('en-IN').format(price.min)} - ₹${new Intl.NumberFormat('en-IN').format(price.max)}`
    : `₹${new Intl.NumberFormat('en-IN').format(price.min)}+`;
};

const getMinPrice = (price: number | { min: number; max?: number }): number => {
  return typeof price === 'number' ? price : price.min;
};

const buildWhatsAppMessage = (selected: Array<{ name: string; displayPrice: string; note?: string }>) => {
  const now = new Date();
  const when = now.toLocaleString('en-IN', { hour12: true });
  const lines = [
    "Charm Bridals — Service Enquiry",
    `Time: ${when}`,
    "",
    "Selected services:",
    ...selected.map((s, i) => `${i+1}. ${s.name} — ${s.displayPrice}${s.note ? ` (${s.note})` : ""}`),
  ];
  const totalNum = selected.reduce((sum, s) => {
    const n = Number((s.displayPrice || '').replace(/[^\d]/g, ''));
    return Number.isFinite(n) ? sum + n : sum;
  }, 0);
  if (selected.length) {
    lines.push("", `Subtotal: ₹${new Intl.NumberFormat('en-IN').format(totalNum)}`);
  }
  lines.push("", "Name:", "Preferred date & time:", "", "Thank you!");
  return lines.join("\n");
};

const ServicesExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(SERVICES[0].key);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  // Filter services based on search
  const filteredServices = useMemo(() => {
    const category = SERVICES.find(cat => cat.key === activeCategory);
    if (!category) return [];
    
    if (!searchQuery.trim()) return category.items;
    
    return category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  // Calculate selected services details
  const selectedDetails = useMemo(() => {
    const details: Array<{ name: string; displayPrice: string; note?: string; price: number }> = [];
    let total = 0;

    selectedServices.forEach(serviceId => {
      for (const category of SERVICES) {
        const service = category.items.find(item => item.id === serviceId);
        if (service) {
          const displayPrice = formatPrice(service.price);
          const minPrice = getMinPrice(service.price);
          details.push({
            name: service.name,
            displayPrice,
            note: service.note,
            price: minPrice
          });
          total += minPrice;
          break;
        }
      }
    });

    return { details, total, count: selectedServices.size };
  }, [selectedServices]);

  const toggleService = (serviceId: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  const clearSelections = () => {
    setSelectedServices(new Set());
  };

  const handleWhatsAppBooking = () => {
    if (selectedDetails.count === 0) return;
    
    const message = buildWhatsAppMessage(selectedDetails.details);
    window.open(`https://wa.me/919894234282?text=${encodeURIComponent(message)}`, "_blank");
  };

  const currentCategory = SERVICES.find(cat => cat.key === activeCategory);

  return (
    <section id="services" className="py-20 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-champagne to-ivory opacity-60"></div>
      
      <div className="relative z-10 container mx-auto px-6 page-container safe-area-padding">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">Select Your Services</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter">
            Choose from our comprehensive range of beauty services tailored for your special day.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-soft-brown/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass-strong border-2 border-champagne/30 rounded-full text-soft-brown placeholder-soft-brown/60 focus:border-jewel-blue focus:outline-none font-inter"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-2 min-w-max">
              {SERVICES.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-6 py-3 rounded-full font-inter text-sm whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg'
                      : 'glass border-2 border-champagne/30 text-soft-brown hover:border-jewel-blue/50'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Content */}
        {currentCategory && (
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="relative mb-8" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-playfair text-soft-brown">{currentCategory.title}</h3>
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full cursor-pointer">
                  View more services
                </Badge>
              </div>
              {currentCategory.blurb && (
                <p className="text-soft-brown/70 font-inter">{currentCategory.blurb}</p>
              )}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
              {filteredServices.map((service, index) => (
                <Card
                  key={service.id}
                  className="glass-strong border-2 border-champagne/30 hover:border-jewel-blue/30 hover:bg-jewel-blue/5 transition-all duration-300 rounded-2xl cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 50)}
                  onClick={() => toggleService(service.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-playfair text-soft-brown leading-tight flex-1 pr-2">
                        {service.name}
                      </CardTitle>
                      <Checkbox
                        checked={selectedServices.has(service.id)}
                        onChange={() => toggleService(service.id)}
                        className="mt-1 flex-shrink-0"
                        aria-label={`Select ${service.name}`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-xl font-bold text-jewel-blue mb-2">
                      {formatPrice(service.price)}
                    </div>
                    {service.note && (
                      <p className="text-soft-brown/60 text-sm font-inter">{service.note}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 lg:relative lg:bottom-auto z-50 bg-white/95 backdrop-blur-sm border-t border-champagne/30 lg:border-t-0 lg:bg-transparent lg:backdrop-blur-none">
          <div className="container mx-auto px-6 py-4 lg:py-0">
            <div className="glass-strong border-2 border-jewel-blue/30 rounded-full lg:rounded-2xl p-4 lg:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1" aria-live="polite">
                  <div className="text-soft-brown font-inter">
                    <span className="font-semibold">Selected: {selectedDetails.count}</span>
                    {selectedDetails.count > 0 && (
                      <span className="ml-2">
                        Total: ₹{new Intl.NumberFormat('en-IN').format(selectedDetails.total)}
                        {selectedDetails.details.some(d => d.note?.includes('~approx')) && (
                          <span className="text-sm text-soft-brown/70"> ~approx</span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedDetails.count > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSelections}
                      className="text-soft-brown hover:text-soft-brown/80 p-2"
                      aria-label="Clear all selections"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                  
                  <Button
                    onClick={handleWhatsAppBooking}
                    disabled={selectedDetails.count === 0}
                    className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] rounded-full px-6 py-2 font-inter disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    aria-label="Book selected services via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Book Your Dream Look</span>
                    <span className="sm:hidden">Book Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Safe area spacing */}
          <div className="h-[env(safe-area-inset-bottom)] bg-white/95 lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesExplorer;