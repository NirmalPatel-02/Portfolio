const Skills = () => {
  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "PHP", "JavaScript", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Laravel", "Django", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    },
    {
      category: "ML Concepts",
      skills: ["Data Preprocessing", "EDA", "Feature Engineering", "ANN", "CNN", "RNN", "LSTM", "NLP"],
    },
    {
      category: "Database",
      skills: ["MySQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Jupyter Notebook", "Postman", "Hugging Face"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Technical Skills
          </h2>

          <div className="space-y-8">
            {skillGroups.map((group, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
