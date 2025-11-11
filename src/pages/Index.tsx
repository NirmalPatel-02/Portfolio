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
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Expertise />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
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
