import { Instagram, MessageCircle, Mail, Phone, MapPin, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/divyaprakash_mua/?igsh=MWVmNWt4YWJocGlyeg%3D%3D#", label: "Instagram" },
    { icon: <MessageCircle className="w-6 h-6" />, href: "https://wa.me/+919894234282", label: "WhatsApp" },
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

  const builderName = 'Assuvar';
  const builderUrl  = 'https://assuvar.com';

  return (
    <footer
      id="footer"
      className="relative bg-[hsl(var(--ivory))] text-[hsl(24_14%_12%)] border-t border-[rgba(0,0,0,0.06)]"
    >
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1" data-aos="fade-up">
            <h3 className="text-3xl font-playfair font-bold mb-4 text-[hsl(24_20%_18%)]">
              Charm Bridals
            </h3>
            <p className="text-[hsl(24_10%_26%)] font-inter mb-6 leading-relaxed">
              Redefining bridal beauty with elegance and glow. Your dream look awaits with our expert artistry and personalized service.
            </p>

            <div className="space-y-3 text-[hsl(24_14%_12%)]">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span className="font-inter">+91 98942 34282</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span className="font-inter">info@charmbridals.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span className="font-inter">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="120">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-[hsl(24_20%_18%)]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-[hsl(24_12%_22%)] hover:text-[hsl(var(--primary))] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="180">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-[hsl(24_20%_18%)]">Our Services</h4>
            <ul className="space-y-3 text-[hsl(24_12%_22%)] font-inter">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div data-aos="fade-up" data-aos-delay="240">
            <h4 className="text-xl font-playfair font-semibold mb-6 text-[hsl(24_20%_18%)]">Connect With Us</h4>

            {/* Social pills */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-full p-3 bg-white border border-[rgba(0,0,0,0.06)] text-[hsl(24_14%_12%)] shadow-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* IG handle card */}
            <div className="rounded-2xl p-4 mb-6 bg-white/80 border border-[rgba(0,0,0,0.06)]">
              <p className="font-inter text-sm text-[hsl(24_10%_30%)] mb-1">Follow our journey:</p>
              <p className="font-semibold font-inter text-[hsl(var(--primary))]">@divyaprakash__mua</p>
            </div>

            {/* Primary CTA */}
            <Button
              onClick={() => window.open('https://wa.me/+919894234282', '_blank')}
              aria-label="Book your bridal transformation on WhatsApp"
              className="w-full rounded-full bg-[hsl(var(--primary))] text-white py-3 shadow-md hover:bg-[hsl(22_32%_44%)] hover:text-[hsl(24_14%_12%)] transition-colors"
            >
              Book Your Transformation
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(0,0,0,0.06)] mt-12 pt-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[hsl(24_10%_30%)]">
            <p className="font-inter text-sm">
              © 2025 Charm Bridals. All rights reserved. Crafted with elegance.
            </p>
            <div className="flex items-center gap-2 font-inter text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for beautiful brides</span>
            </div>
          </div>

          {/* Creator badge */}
          <div className="mt-6 flex justify-center">
            <a
              href={builderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${builderName}`}
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold 
                         bg-[hsl(var(--primary))] text-white shadow-md
                         hover:bg-[hsl(22_32%_44%)] hover:text-[hsl(24_14%_12%)]
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-[color-mix(in_srgb,hsl(var(--primary)),white_35%)] transition-colors"
            >
              <Award className="w-4 h-4" />
              <span className="whitespace-nowrap">
                Built by <span className="font-bold">{builderName}</span> — <span className="underline underline-offset-2">assuvar.com</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
