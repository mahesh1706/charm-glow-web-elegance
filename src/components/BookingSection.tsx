
import { useState } from 'react';
import { MessageCircle, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    services: [] as string[],
    preferredDate: '',
    venue: '',
    studioTime: '',
    message: ''
  });

  const services = [
    'Makeup', 'Hairstyle', 'Saree Draping', 'Sherry', 
    'Boxing', 'Lens', 'Lash Extension', 'Hair Extension', 
    'Complimentary Groom Makeup'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(s => s !== service)
      }));
    }
  };

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book Charm Bridals services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nServices: ${formData.services.join(', ')}\nPreferred Date: ${formData.preferredDate}\nVenue: ${formData.venue}\nStudio Time: ${formData.studioTime}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+919894234282?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-champagne opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">Book Your Dream Look</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter">
            Transform your special day with our luxury bridal services. Choose from instant WhatsApp booking or detailed consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* WhatsApp Booking */}
          <div className="glass-strong rounded-3xl p-8" data-aos="fade-right">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-playfair text-soft-brown mb-4">Instant WhatsApp Booking</h3>
              <p className="text-soft-brown/80 mb-8 font-inter">
                Get quick responses and instant booking confirmation through WhatsApp.
              </p>
              <Button 
                onClick={handleWhatsAppBooking}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full glow-hover transition-all duration-300"
              >
                Book via WhatsApp
              </Button>
            </div>
          </div>

          {/* Detailed Booking Form */}
          <div className="glass-strong rounded-3xl p-8" data-aos="fade-left">
            <h3 className="text-2xl font-playfair text-soft-brown mb-6 text-center">Detailed Booking</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                  className="glass border-jewel-blue/30 focus:border-jewel-blue"
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                  className="glass border-jewel-blue/30 focus:border-jewel-blue"
                />
              </div>

              {/* Services Selection */}
              <div>
                <label className="text-soft-brown font-inter mb-3 block">Select Services:</label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        className="border-jewel-blue/30"
                      />
                      <label htmlFor={service} className="text-sm text-soft-brown font-inter cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-jewel-blue" />
                  <Input
                    type="date"
                    placeholder="Preferred Date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData(prev => ({...prev, preferredDate: e.target.value}))}
                    className="glass border-jewel-blue/30 focus:border-jewel-blue pl-12"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-jewel-blue" />
                  <Input
                    placeholder="Venue / Location"
                    value={formData.venue}
                    onChange={(e) => setFormData(prev => ({...prev, venue: e.target.value}))}
                    className="glass border-jewel-blue/30 focus:border-jewel-blue pl-12"
                  />
                </div>
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-3 w-5 h-5 text-jewel-blue" />
                <Input
                  placeholder="Studio Booking Time"
                  value={formData.studioTime}
                  onChange={(e) => setFormData(prev => ({...prev, studioTime: e.target.value}))}
                  className="glass border-jewel-blue/30 focus:border-jewel-blue pl-12"
                />
              </div>

              <Textarea
                placeholder="Additional Message or Special Requests"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                className="glass border-jewel-blue/30 focus:border-jewel-blue min-h-24"
              />

              <Button 
                type="submit"
                className="w-full bg-jewel-blue hover:bg-jewel-blue/90 text-white py-4 text-lg rounded-full glow-hover transition-all duration-300"
              >
                Submit Booking Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
