
import { Instagram, MessageCircle, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/divyaprakash__mua", label: "Instagram" },
    { icon: <MessageCircle className="w-6 h-6" />, href: "https://wa.me/+919876543210", label: "WhatsApp" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:info@charmbridals.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "Classes", href: "#classes" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Bridal Makeup",
    "Hair Styling", 
    "Saree Draping",
    "Lash Extensions",
    "Makeup Classes",
    "Group Bookings"
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-champagne to-soft-brown text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-brown via-champagne to-jewel-blue opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-20 h-20 glass rounded-full float-animation opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 glass-strong rounded-lg rotate-45 float-animation opacity-30" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1" data-aos="fade-up">
            <h3 className="text-3xl font-playfair font-bold mb-4 text-gradient">
              Charm Bridals
            </h3>
            <p className="text-ivory/90 font-inter mb-6 leading-relaxed">
              Redefining bridal beauty with elegance and glow. Your dream look awaits with our expert artistry and personalized service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-jewel-blue" />
                <span className="text-ivory/90 font-inter">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-jewel-blue" />
                <span className="text-ivory/90 font-inter">info@charmbridals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-jewel-blue" />
                <span className="text-ivory/90 font-inter">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-ivory">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-ivory/80 hover:text-jewel-blue transition-colors duration-300 font-inter hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-ivory">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-ivory/80 font-inter">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-ivory">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-strong rounded-full p-3 text-ivory hover:text-jewel-blue hover:scale-110 transition-all duration-300 glow-hover"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Instagram Handle */}
            <div className="glass rounded-2xl p-4 mb-6">
              <p className="text-ivory/90 font-inter text-sm mb-2">Follow our journey:</p>
              <p className="text-jewel-blue font-semibold font-inter">@divyaprakash__mua</p>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => window.open('https://wa.me/+919876543210', '_blank')}
              className="w-full bg-jewel-blue hover:bg-jewel-blue/90 text-white py-3 rounded-full glow-hover transition-all duration-300 font-inter"
            >
              Book Your Transformation
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-ivory/20 mt-12 pt-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-ivory/70 font-inter text-sm mb-4 md:mb-0">
              © 2024 Charm Bridals. All rights reserved. Crafted with elegance.
            </p>
            
            <div className="flex items-center space-x-2 text-ivory/70 font-inter text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for beautiful brides</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
