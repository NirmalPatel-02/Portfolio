import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-blue-50/30"
    >
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground">
              Patel <span className="text-primary">Nirmal N.</span>
            </h1>
            <p className="text-2xl md:text-3xl gradient-text font-semibold">
              Aspiring AI/ML Engineer | Turning Data into Intelligent Solutions
            </p>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              B.Sc. IT graduate with a strong foundation in Python, Machine Learning, and Deep Learning. 
              I specialize in building intelligent models, data preprocessing, and API integration. 
              Passionate about leveraging AI to solve real-world problems through clean, efficient, and impactful code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-secondary/20 rounded-full blur-3xl opacity-60" />
              <img 
                src={profilePhoto} 
                alt="Patel Nirmal N." 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
