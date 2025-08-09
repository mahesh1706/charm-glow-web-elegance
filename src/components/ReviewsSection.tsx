
import { useState, useEffect } from 'react';
import { Star, Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const videoReviews = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop', title: 'Priya\'s Bridal Experience' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop', title: 'Meera\'s Wedding Transformation' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=300&h=200&fit=crop', title: 'Anjali\'s Celebrity Look' }
  ];

  const textReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Absolutely stunning work! Divya transformed me into a dream bride. The attention to detail and the way she understood my vision was incredible. I felt like a princess on my wedding day!",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=80&h=80&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Meera Patel",  
      rating: 5,
      text: "I can't thank Charm Bridals enough! The makeup was flawless and lasted throughout my 12-hour wedding ceremony. Divya is not just an artist, she's a magician!",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Anjali Reddy",
      rating: 5,
      text: "The Elite Signature package was worth every penny! I looked like a Bollywood star at my reception. The team's professionalism and creativity exceeded all my expectations.",
      image: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=80&h=80&fit=crop&crop=faces"
    },
    {
      id: 4,
      name: "Kavya Krishna",
      rating: 5,
      text: "From the initial consultation to the final touch-up, everything was perfect. Divya's expertise in traditional South Indian bridal looks is unmatched. Highly recommended!",
      image: "https://images.unsplash.com/photo-1583391733956-3c32315d30d5?w=80&h=80&fit=crop&crop=faces"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % textReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [textReviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % textReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + textReviews.length) % textReviews.length);
  };

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-champagne to-ivory opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 text-jewel-blue opacity-20">
        <Star className="w-8 h-8 glow-animation" />
      </div>
      <div className="absolute bottom-20 left-10 text-champagne opacity-30">
        <Star className="w-6 h-6 glow-animation" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">Client Love Stories</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter mb-6">
            See what our beautiful brides have to say about their magical transformation experience.
          </p>
          <div className="flex items-center justify-center space-x-2 text-jewel-blue">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-lg font-semibold">Loved by 200+ Happy Brides</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>

        {/* Video Reviews */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-playfair text-soft-brown text-center mb-8">Video Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {videoReviews.map((video, index) => (
              <div
                key={video.id}
                className="relative group cursor-pointer glass-strong rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 glow-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-white font-inter text-sm">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Reviews Carousel */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="relative glass-strong rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-jewel-blue/30" />
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={textReviews[currentReview].image}
                  alt={textReviews[currentReview].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-jewel-blue/20"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(textReviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-soft-brown font-inter leading-relaxed mb-6 max-w-2xl mx-auto">
                "{textReviews[currentReview].text}"
              </p>
              
              <h4 className="text-xl font-playfair text-jewel-blue font-semibold">
                {textReviews[currentReview].name}
              </h4>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-strong border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-strong border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {textReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-jewel-blue' : 'bg-jewel-blue/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
