
import { useState, useMemo, useRef } from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const ClassesSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });
  type ClassItem = { name: string; price: string; syllabus: string[] };
  const classesData: ClassItem[] = [
    {
      name: "Saree prepleating and draping",
      price: "999",
      syllabus: [
        "Body measurement",
        "Prepleat",
        "Ironing",
        "Boxing",
        "Packing",
        "Draping",
        "Covered"
      ]
    },
    {
      name: "Self grooming",
      price: "1000",
      syllabus: [
        "3 makeup styles",
        "1.simple bb makeup look",
        "2. Basic makeup",
        "3. partymakeup",
        "4. 2 hairstyles according to face",
        "5. skin care",
        "6. healthcare"
      ]
    },
    {
      name: "Nail extension and art",
      price: "2500",
      syllabus: [
        "1. Nail extension product knowledge",
        "2. one style extension",
        "3. 5 style arts",
        "4. accessories and stone fixing",
        "5. hands on practice (u can bring ur friend as model or with Clas’s mates and practice )"
      ]
    },
    {
      name: "Basic beautician course",
      price: "7000",
      syllabus: [
        "1.threading",
        "2 dtan",
        "3. Facial",
        "4. bleach",
        "5. basic haircuts",
        "6. honey wax",
        "7. hairdye application",
        "8. manicure pedicure"
      ]
    },
    {
      name: "Basic to advanced beautician course",
      price: "35000",
      syllabus: [
        "1. All basic syllabus",
        "2. advanced facial with acupressure",
        "3. galvanic facial",
        "4. high frequency facial",
        "5. pimple treatment",
        "6. hydra facial",
        "7. micro needling skin treatment",
        "8. chemical peel",
        "9. melisma treatment",
        "10. henna prepping and application",
        "11. advanced roll on wax",
        "12. crystal pedicure manicure",
        "13. hair spa",
        "14. advanced haircut",
        "15. blow dry setting",
        "16. hair colouring",
        "17. hair highlights",
        "18. dandruff treatment",
        "19. smoothening and straightening",
        "20. keratin",
        "21. hair Botox",
        "22. head massage with acupressure",
        "23. skin aesthetic treatments",
        "24. mda treatment",
        "25. rf and electro portion treatment",
        "26. Bollywood facial",
        "27. hair growth treatment",
        "28. undereye treatment",
        "29. pigmentation treatment",
        "30. health and hygiene",
        "31. social media management",
        "32. shop and license knowledge",
        "33. msme registration",
        "34. government certification"
      ]
    },
    {
      name: "Bridal makeup class",
      price: "15000",
      syllabus: [
        "1.non Hd makeup",
        "2. Waterproof sweat proof makeup",
        "3. HD makeup",
        "4. skinglow makeup",
        "5. matte Hd look",
        "6. sculpting contouring technique",
        "7. techniques and customerization",
        "8. 10 hairstyles ( bridal)",
        "9.  saree pre  pleating and bridal draping",
        "10. 5 types of saree draping",
        "11. government certification"
      ]
    },
    {
      name: "Master Clas’s makeup course",
      price: "30000",
      syllabus: [
        "1. Glass skin makeup",
        "2. celebrity makeup",
        "3. international HD signature style",
        "4. airbrush makeup",
        "5. Advanced hairstyles 10",
        "6. pulling technique and messy look technique and different curl technique",
        "Free products with free portfolio",
        "Shoots"
      ]
    }
  ];

  // Keep existing select options wiring using course names only
  const courses = classesData.map((c) => c.name);
  // State and helpers for detail overlay
  // (moved)
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ClassItem | null>(null);
  const lastFocusedRef = useRef<HTMLButtonElement | null>(null);
  const isMobile = useIsMobile();

  const supportsRupee = useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return true;
      ctx.font = '16px sans-serif';
      const wR = ctx.measureText('₹').width;
      const wQ = ctx.measureText('?').width;
      return wR > wQ * 0.8;
    } catch {
      return true;
    }
  }, []);

  const formatINR = (value: string) => {
    const num = Number(value);
    const formatted = Number.isFinite(num) ? new Intl.NumberFormat('en-IN').format(num) : value;
    const symbol = supportsRupee ? '₹' : 'Rs. ';
    return `${symbol}${formatted}`;
  };

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
    <section id="classes" className="py-20 relative">
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
              {classesData.map((course, index) => (
                <button
                  key={course.name}
                  onClick={(e) => {
                    lastFocusedRef.current = e.currentTarget as HTMLButtonElement
                    setSelected(course)
                    setOpen(true)
                  }}
                  className="w-full text-left glass rounded-2xl p-4 hover:bg-jewel-blue/5 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jewel-blue/50"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-inter font-semibold text-soft-brown mb-1">{course.name}</h4>
                    <span className="text-sm font-medium text-jewel-blue">{formatINR(course.price)}</span>
                  </div>
                  <p className="text-sm text-soft-brown/70">
                    Professional certification program with hands-on training
                  </p>
                </button>
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

        {/* Course Detail Overlay */}
        {selected && (
          isMobile ? (
            <Drawer open={open} onOpenChange={(v) => {
              setOpen(v)
              if (!v) setTimeout(() => lastFocusedRef.current?.focus(), 0)
            }}>
              <DrawerContent className="h-[90vh]">
                <DrawerHeader className="flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <DrawerTitle id="class-detail-title" className="font-playfair text-soft-brown">{selected.name}</DrawerTitle>
                    <span className="text-jewel-blue font-semibold">{formatINR(selected.price)}</span>
                  </div>
                  <DrawerClose asChild>
                    <button aria-label="Close" className="rounded-md p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">×</button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="px-6 pb-6 overflow-y-auto">
                  <ul className="list-disc pl-6 space-y-2 text-soft-brown/80">
                    {selected.syllabus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Dialog open={open} onOpenChange={(v) => {
              setOpen(v)
              if (!v) setTimeout(() => lastFocusedRef.current?.focus(), 0)
            }}>
              <DialogContent aria-labelledby="class-detail-title" className="max-w-3xl w-[92vw] max-h-[80vh] overflow-hidden">
                <DialogHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <DialogTitle id="class-detail-title" className="font-playfair text-soft-brown">{selected.name}</DialogTitle>
                    <span className="text-jewel-blue font-semibold">{formatINR(selected.price)}</span>
                  </div>
                  <DialogClose asChild>
                    <button aria-label="Close" className="rounded-md p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">×</button>
                  </DialogClose>
                </DialogHeader>
                <div className="overflow-y-auto pr-2">
                  <ul className="list-disc pl-6 space-y-2 text-soft-brown/80">
                    {selected.syllabus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          )
        )}
      </div>
    </section>
  );
};

export default ClassesSection;
