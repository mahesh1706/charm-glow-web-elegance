import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // ⬇️ Replace with real names/handles/ratings/text from your Google Business listing
  const textReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      handle: "@priya_sharma",
      rating: 5,
      text:
        "Absolutely stunning work! Divya understood my vision perfectly and made me feel like a dream bride. The finish stayed flawless the entire day."
    },
    {
      id: 2,
      name: "Meera Patel",
      handle: "@meeraxpatel",
      rating: 5,
      text:
        "Makeup was lightweight yet full coverage and lasted through my long ceremony. Super professional and calm experience—highly recommend!"
    },
    {
      id: 3,
      name: "Anjali Reddy",
      handle: "@anjali.reddy",
      rating: 5,
      text:
        "Loved the soft glam look for my reception. The team was punctual, hygienic, and creative. Photos came out amazing."
    },
    {
      id: 4,
      name: "Kavya Krishna",
      handle: "@kavya_krishna",
      rating: 5,
      text:
        "From trial to final touch-up everything was on point. Traditional South Indian look done with modern finesse."
    },
    {
      id: 5,
      name: "Shreya N",
      handle: "@shreya.n",
      rating: 5,
      text:
        "Airbrush base looked natural and didn’t crack. Loved the hairstyle suggestions based on my face shape."
    },
    {
      id: 6,
      name: "Divya M",
      handle: "@divyam_",
      rating: 5,
      text:
        "Great communication, neat draping, perfect shade match. Got so many compliments the whole evening!"
    },
    {
      id: 7,
      name: "Harini V",
      handle: "@harini.v",
      rating: 5,
      text:
        "Very gentle with skin, products suited my sensitive type. Lashes and lenses were comfortable and looked elegant."
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
      <div className="absolute inset-0 bg-gradient-to-b from-champagne to-ivory opacity-50" />

      {/* Floating decor */}
      <div className="absolute top-10 right-10 text-jewel-blue/30">
        <Star className="w-8 h-8 glow-animation" />
      </div>
      <div className="absolute bottom-20 left-10 text-champagne/60">
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

        {/* Text Reviews Carousel (no avatars, no videos) */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="relative glass-strong rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-jewel-blue/30" aria-hidden="true" />

            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center mb-4" aria-label={`${textReviews[currentReview].rating} out of 5 stars`}>
                {[...Array(textReviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-lg md:text-xl text-soft-brown font-inter leading-relaxed mb-6 max-w-2xl mx-auto">
                “{textReviews[currentReview].text}”
              </p>

              {/* Reviewer */}
              <h4 className="text-xl font-playfair text-jewel-blue font-semibold">
                {textReviews[currentReview].name}{' '}
                <span className="text-jewel-blue/70 font-inter">
                  {textReviews[currentReview].handle ? `(${textReviews[currentReview].handle})` : ''}
                </span>
              </h4>
            </div>

            {/* Navigation */}
            <Button
              onClick={prevReview}
              aria-label="Previous review"
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-strong border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={nextReview}
              aria-label="Next review"
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-strong border-jewel-blue/30 text-jewel-blue hover:bg-jewel-blue hover:text-white rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {textReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  aria-label={`Go to review ${index + 1}`}
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
