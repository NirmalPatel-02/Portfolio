import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.Sc. (CA & IT)",
      institution: "Ganpat University, Gujarat, India",
      period: "2025 – 2027",
      cgpa: "8.6",
      status: "Current",
    },
    {
      degree: "B.Sc. (CA & IT)",
      institution: "Ganpat University, Gujarat, India",
      period: "2022 – 2025",
      cgpa: "7.97",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-white to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            <span className="text-primary">Education</span>
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="card-elegant p-6 md:p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
