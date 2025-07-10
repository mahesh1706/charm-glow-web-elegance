
import { useState } from 'react';
import { Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Bridal', 'Engagement', 'Celebrity', 'Traditional'];

  // Placeholder images - in a real app, these would be actual image URLs
  const galleryItems = [
    { id: 1, category: 'Bridal', title: 'Classic Bridal Look', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop' },
    { id: 2, category: 'Celebrity', title: 'Red Carpet Glam', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=600&fit=crop' },
    { id: 3, category: 'Engagement', title: 'Soft Romantic Look', image: 'https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=400&h=600&fit=crop' },
    { id: 4, category: 'Traditional', title: 'Traditional South Indian', image: 'https://images.unsplash.com/photo-1583391733956-3c32315d30d5?w=400&h=600&fit=crop' },
    { id: 5, category: 'Bridal', title: 'Modern Bridal Style', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=600&fit=crop' },
    { id: 6, category: 'Celebrity', title: 'Fashion Week Inspired', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=600&fit=crop' },
    { id: 7, category: 'Engagement', title: 'Dreamy Engagement Look', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop' },
    { id: 8, category: 'Traditional', title: 'Royal Traditional', image: 'https://images.unsplash.com/photo-1583391733956-3c32315d30d5?w=400&h=600&fit=crop' },
    { id: 9, category: 'Bridal', title: 'Vintage Bridal', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=600&fit=crop' }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 relative">
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
