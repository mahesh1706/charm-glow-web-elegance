
import { Crown, Star, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PackagesSection = () => {
  const packages = [
    {
      name: "HD Semiglow (Pro)",
      icon: <Sparkles className="w-8 h-8 text-jewel-blue" />,
      price: "₹13,000",
      description: "Radiant glow",
      popular: false
    },
    {
      name: "International HD Glossy",
      icon: <Crown className="w-8 h-8 text-jewel-blue" />,
      price: "₹15,000",
      description: "Flawless finish",
      popular: true
    },
    {
      name: "Advanced Dewy Airbrush",
      icon: <Star className="w-8 h-8 text-jewel-blue" />,
      price: "₹18,000",
      description: "Effortless perfection",
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
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">GET READY TO SHINE ON YOUR BIG DAY!</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter">
            Bridal Packages — Unleash your inner queen with our stunning bridal packages!
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

        {/* Signature Upgrade Banner */}
        <div className="mt-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-strong border-2 border-jewel-blue/60 rounded-2xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-jewel-blue" />
              <span className="font-playfair text-soft-brown text-xl">Glassskin Makeup</span>
            </div>
            <div className="text-jewel-blue font-bold text-lg">₹20,000</div>
            <p className="text-soft-brown/70 font-inter">Unparalleled luxury</p>
          </div>
        </div>

        {/* Includes */}
        <div className="mt-12 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="250">
          <h3 className="text-2xl font-playfair text-soft-brown mb-4">Includes</h3>
          <ul className="space-y-3">
            {[
              "Makeup",
              "Hairstyle",
              "Saree boxing and draping",
              "Lens",
              "Lashes",
              "Extensions for hair",
              "Complimentary groom makeup (guidance and product provided)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-jewel-blue mt-0.5 flex-shrink-0" />
                <span className="text-soft-brown font-inter text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Services */}
        <div className="mt-10 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-playfair text-soft-brown mb-4">Additional Services</h3>
          <ul className="space-y-3">
            {[
              "Bridal Mehandi — ₹2,000 onwards",
              "Jewels Mugurtham set — ₹2,000 onwards (premium range)",
              "Reception Jewels — ₹1,000 onwards",
              "Nail Extensions — ₹800 (five fingers)",
              "Gel Polish — ₹400",
              "Art and Accessories — ₹300"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-jewel-blue mt-0.5 flex-shrink-0" />
                <span className="text-soft-brown font-inter text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bridesmaid Packages */}
        <div className="mt-16 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="350">
          <h3 className="text-3xl font-playfair text-soft-brown mb-2">Bridesmaid Packages</h3>
          <p className="text-soft-brown/80 font-inter mb-6">
            Make your squad shine with our fabulous bridesmaid packages!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-playfair text-soft-brown mb-3">Makeup</h4>
              <ul className="space-y-2">
                {[
                  "Krylon — ₹1,200",
                  "HD — ₹2,200",
                  "Ultra HD — ₹3,200",
                  "Dewy Definition — ₹4,200"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-jewel-blue mt-1 flex-shrink-0" />
                    <span className="text-soft-brown font-inter text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-playfair text-soft-brown mb-3">Hair & Add-ons</h4>
              <ul className="space-y-2">
                {[
                  "Basic Hairstyle — ₹1,200",
                  "Pro Hairstyle — ₹1,800 (hair preparation done)",
                  "Curls — ₹2,200",
                  "Extra Extensions — ₹700 (no need to return)",
                  "Extra Lens — ₹350",
                  "Extra Lashes — ₹350",
                  "Saree Boxing — ₹500 (basic)",
                  "Bridal Boxing — ₹800",
                  "Saree Boxing and Draping — ₹1,200"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-jewel-blue mt-1 flex-shrink-0" />
                    <span className="text-soft-brown font-inter text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button 
              onClick={scrollToBooking}
              className="rounded-full px-8 py-3 glass border-2 border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white glow-hover"
            >
              Book now and get ready to slay your wedding day!
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagesSection;
