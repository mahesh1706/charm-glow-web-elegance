
import { useState } from 'react';
import { Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Bridal', 'Engagement', 'Celebrity', 'Traditional'];

  // Placeholder images - in a real app, these would be actual image URLs
  const galleryItems = [
    { id: 1, category: '', title: '', image: 'https://i.postimg.cc/d179R3fz/Screenshot-2025-08-07-222411.png' },
    { id: 2, category: '', title: '', image: 'https://i.postimg.cc/0jYDZw0H/Screenshot-2025-08-07-223316.png' },
    { id: 3, category: '', title: '', image: 'https://i.postimg.cc/m2S7H7DP/Screenshot-2025-08-07-222754.png' },
    { id: 4, category: '', title: '', image: 'https://i.postimg.cc/Jz4ZctDP/Screenshot-2025-08-07-222843.png' },
    { id: 5, category: '', title: '', image: 'https://i.postimg.cc/vHGVbDzb/Screenshot-2025-08-07-222950.png' },
    { id: 6, category: '', title: '', image: 'https://i.postimg.cc/Kzn1yy31/Screenshot-2025-08-07-222901.png' },
    { id: 7, category: '', title: '', image: 'https://i.postimg.cc/xd8GYq9c/Screenshot-2025-08-07-222439.png' },
    { id: 8, category: '', title: '', image: 'https://i.postimg.cc/5NkNTtKP/Screenshot-2025-08-07-223237.png' },
    { id: 9, category: '', title: '', image: 'https://i.postimg.cc/QdTszJTt/Screenshot-2025-08-07-222917.png' }
  ];
  //Bridal,Classic Bridal Look
  // Celebrity,Red Carpet Glam
  // Engagement,Soft Romantic Look'
  // Traditional,Traditional South Indian
  // Bridal,Modern Bridal Style
  //Celebrity,Fashion Week Inspired
  // Engagement,Dreamy Engagement Look
  // Traditional,Royal Traditional
  // Bridal,Vintage Bridal

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-champagne opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">Our Masterpieces</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter">
            Explore our portfolio of stunning transformations and see the magic we create for each client.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-strong rounded-full p-2 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-jewel-blue text-white shadow-lg'
                    : 'glass text-soft-brown hover:bg-jewel-blue/10 hover:text-jewel-blue'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl glass-strong hover:scale-105 transition-all duration-500 glow-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <div>
                  <h3 className="text-white font-playfair text-xl mb-1">{item.title}</h3>
                  <p className="text-champagne text-sm">{item.category}</p>
                </div>
                <Button
                  size="icon"
                  className="glass-strong border-white/30 text-white hover:bg-white hover:text-soft-brown rounded-full"
                >
                  <Eye className="w-5 h-5" />
                </Button>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-sm font-inter text-soft-brown">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Button className="glass-strong border-2 border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white px-8 py-4 text-lg rounded-full glow-hover transition-all duration-300">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
