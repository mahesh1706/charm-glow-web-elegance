
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BookingSection from '@/components/BookingSection';
import ServicesExplorer from '@/components/ServicesExplorer';
import PackagesSection from '@/components/PackagesSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ClassesSection from '@/components/ClassesSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-luxury-gradient">
      <Navigation />
      <HeroSection />
      <BookingSection />
      <ServicesExplorer />
      <PackagesSection />
      <GallerySection />
      <ReviewsSection />
      <ClassesSection />
      <Footer />
    </div>
  );
};

export default Index;
