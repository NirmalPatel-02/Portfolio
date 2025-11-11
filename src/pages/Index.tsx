import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Expertise />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-white/60 backdrop-blur-sm">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © 2025 Patel Nirmal N. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
