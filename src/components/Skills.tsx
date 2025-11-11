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
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="space-y-8">
            {skillGroups.map((group, index) => (
              <div key={index} className="card-elegant p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-primary/5 text-foreground rounded-lg border border-primary/20 hover:bg-primary hover:text-white transition-all cursor-default font-medium"
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
