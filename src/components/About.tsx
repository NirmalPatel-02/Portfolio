import { Code2, Database, Brain, Server } from "lucide-react";

const About = () => {
  const tools = [
    { icon: Code2, name: "Python" },
    { icon: Brain, name: "TensorFlow" },
    { icon: Database, name: "MySQL" },
    { icon: Server, name: "Laravel" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="card-elegant p-8 md:p-12 space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a B.Sc. IT graduate and aspiring AI/ML Engineer with a strong foundation in Python, 
              Machine Learning, and Deep Learning. I specialize in building intelligent models, data 
              preprocessing, and API integration. Passionate about leveraging AI to solve real-world 
              problems through clean, efficient, and impactful code.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all border border-border"
                  style={{
                    transition: 'all 0.2s ease',
                  }}
                >
                  <tool.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
