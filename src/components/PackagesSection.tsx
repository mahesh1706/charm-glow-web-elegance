
import { Crown, Star, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PackagesSection = () => {
  const packages = [
    {
      name: "Bridal Glow Package",
      icon: <Sparkles className="w-8 h-8 text-jewel-blue" />,
      price: "₹25,000",
      description: "Complete bridal transformation for your special day",
      features: [
        "Full bridal makeover with premium products",
        "Professional lash extensions",
        "Elegant hairstyle design",
        "Traditional saree draping",
        "Touch-up kit included",
        "2 hours of service"
      ],
      popular: false
    },
    {
      name: "Elite Signature Look",
      icon: <Crown className="w-8 h-8 text-jewel-blue" />,
      price: "₹45,000",
      description: "Celebrity-style transformation with custom contouring",
      features: [
        "Celebrity-inspired makeup artistry",
        "Advanced contouring & highlighting",
        "Designer hairstyle with accessories",
        "Premium lash & lens application",
        "Saree draping with styling",
        "Complimentary groom makeup",
        "4 hours of comprehensive service",
        "Professional photoshoot guidance"
      ],
      popular: true
    },
    {
      name: "Studio Essential",
      icon: <Star className="w-8 h-8 text-jewel-blue" />,
      price: "₹15,000",
      description: "Elegant, minimal makeover at Charm Bridals studio",
      features: [
        "Studio-based makeup session",
        "Natural bridal glow",
        "Basic hairstyle",
        "Light contouring",
        "1.5 hours of service",
        "Perfect for intimate ceremonies"
      ],
      popular: false
    }
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-champagne to-ivory opacity-60"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">Luxury Packages</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter">
            Choose from our carefully curated packages designed to make your special day unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`glass-strong border-2 ${pkg.popular ? 'border-jewel-blue shadow-2xl scale-105' : 'border-champagne/30'} hover:scale-105 transition-all duration-500 glow-hover relative overflow-hidden rounded-3xl`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-jewel-blue text-white px-4 py-2 text-sm font-semibold rounded-bl-2xl">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 glass rounded-full glow-animation">
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-playfair text-soft-brown mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-jewel-blue mb-2">{pkg.price}</div>
                <p className="text-soft-brown/80 font-inter">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-jewel-blue mt-0.5 flex-shrink-0" />
                      <span className="text-soft-brown font-inter text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToBooking}
                  className={`w-full py-3 rounded-full font-inter transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-jewel-blue hover:bg-jewel-blue/90 text-white shadow-lg' 
                      : 'glass border-2 border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white'
                  } glow-hover`}
                >
                  Choose This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
