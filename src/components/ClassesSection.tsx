
import { useState } from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClassesSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const courses = [
    'Bridal Makeup Masterclass',
    'Advanced Contouring Techniques',
    'Traditional Saree Draping',
    'Airbrush Makeup Artistry',
    'Lash & Lens Application Mastery',
    'Hair Styling & Extensions',
    'Complete Makeup Artist Certification'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Class enrollment:', formData);
    // Handle enrollment logic here
  };

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-jewel-blue" />,
      title: "Expert Training",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-jewel-blue" />,
      title: "Comprehensive Curriculum",
      description: "Detailed course materials and hands-on practice sessions"
    },
    {
      icon: <Users className="w-8 h-8 text-jewel-blue" />,
      title: "Small Batches",
      description: "Personalized attention with limited students per batch"
    },
    {
      icon: <Award className="w-8 h-8 text-jewel-blue" />,
      title: "Certification",
      description: "Industry-recognized certification upon course completion"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-champagne opacity-60"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-playfair text-soft-brown mb-4">Learn with Charm</h2>
          <p className="text-lg text-soft-brown/80 max-w-2xl mx-auto font-inter">
            Master the art of makeup and beauty with our comprehensive training programs designed for aspiring artists.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass-strong border-champagne/30 text-center hover:scale-105 transition-all duration-300 glow-hover rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 glass rounded-full glow-animation">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-playfair text-soft-brown">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-soft-brown/80 font-inter text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Course Information */}
          <div className="glass-strong rounded-3xl p-8" data-aos="fade-right">
            <h3 className="text-3xl font-playfair text-soft-brown mb-6">Available Courses</h3>
            
            <div className="space-y-4 mb-8">
              {courses.map((course, index) => (
                <div
                  key={course}
                  className="glass rounded-2xl p-4 hover:bg-jewel-blue/5 transition-colors duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <h4 className="font-inter font-semibold text-soft-brown mb-1">{course}</h4>
                  <p className="text-sm text-soft-brown/70">
                    Professional certification program with hands-on training
                  </p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 bg-jewel-blue/5">
              <h4 className="font-playfair text-xl text-jewel-blue mb-2">Course Features</h4>
              <ul className="text-sm text-soft-brown/80 space-y-1">
                <li>• Industry-standard techniques and tools</li>
                <li>• Live model practice sessions</li>
                <li>• Product knowledge and application</li>
                <li>• Business setup guidance</li>
                <li>• Portfolio development support</li>
              </ul>
            </div>
          </div>

          {/* Enrollment Form */}
          <div className="glass-strong rounded-3xl p-8" data-aos="fade-left">
            <h3 className="text-3xl font-playfair text-soft-brown mb-6 text-center">Enroll Now</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                className="glass border-jewel-blue/30 focus:border-jewel-blue h-12"
                required
              />

              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                className="glass border-jewel-blue/30 focus:border-jewel-blue h-12"
                required
              />

              <Select onValueChange={(value) => setFormData(prev => ({...prev, course: value}))}>
                <SelectTrigger className="glass border-jewel-blue/30 focus:border-jewel-blue h-12">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent className="glass-strong backdrop-blur-xl">
                  {courses.map((course) => (
                    <SelectItem key={course} value={course} className="hover:bg-jewel-blue/10">
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-sm text-soft-brown/70 mb-1">Course Duration</p>
                  <p className="font-semibold text-jewel-blue">2-4 Weeks</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-sm text-soft-brown/70 mb-1">Batch Size</p>
                  <p className="font-semibold text-jewel-blue">Max 8 Students</p>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-jewel-blue hover:bg-jewel-blue/90 text-white py-4 text-lg rounded-full glow-hover transition-all duration-300"
              >
                Enroll Now
              </Button>

              <div className="text-center">
                <Button 
                  type="button"
                  variant="ghost"
                  className="text-jewel-blue hover:text-jewel-blue/80 font-inter underline"
                >
                  Download Detailed Curriculum (PDF)
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
