import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Used Car Value Estimator",
      description: "Neural Network model estimating resale value of pre-owned cars using attributes like age, mileage, and brand.",
      tools: ["Python", "TensorFlow", "FastAPI", "Hugging Face", "Pandas", "NumPy"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "CampusHire Predictor",
      description: "Classification model predicting student placement probability using academic data.",
      tools: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Email Spam Classifier",
      description: "ML-based text classification model detecting spam emails using TF-IDF and NLP techniques.",
      tools: ["Python", "Scikit-learn", "Pandas"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="card-elegant p-6 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/20 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 btn-primary text-sm"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
