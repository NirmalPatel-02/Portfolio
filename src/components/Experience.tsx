import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            <span className="text-primary">Experience</span>
          </h2>

          <div className="card-elegant p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">Backend Developer Intern</h3>
                  <span className="text-sm text-muted-foreground">Jan 2025 – Jun 2025</span>
                </div>
                <p className="text-primary font-semibold mb-4">BM Coder</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>Built and maintained dynamic web applications with robust backend architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>Crafted robust APIs and optimized database structures for enhanced performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>Resolved complex bugs in live projects to improve system reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>Participated in code reviews and followed industry best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
