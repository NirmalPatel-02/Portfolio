import { Brain, Database, Network, Server } from "lucide-react";

const Expertise = () => {
  const expertise = [
    {
      icon: Brain,
      title: "AI & ML Model Development",
      description: "Building and training intelligent models using Python, TensorFlow, and Scikit-learn.",
    },
    {
      icon: Database,
      title: "Data Science Workflow",
      description: "Data preprocessing, EDA, feature engineering, model evaluation, and hyperparameter tuning.",
    },
    {
      icon: Network,
      title: "Deep Learning & NLP",
      description: "Developing ANN, CNN, RNN, LSTM, and NLP solutions for text and vision tasks.",
    },
    {
      icon: Server,
      title: "Backend Development (Laravel)",
      description: "Creating secure and scalable backend systems integrated with AI models.",
    },
  ];

  return (
    <section id="expertise" className="py-20 px-4 bg-secondary/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            What I Do
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 md:p-8 hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
