export default function Skills() {
  const skills = [
    "React", "Angular & TypeScript", "JavaScript (ES6+)", "Node.js",
    ".NET Core", "Azure (App Services, Functions, DevOps Pipelines)",
    "AI‑powered UI workflows", "REST APIs", "Tailwind CSS",
    "Material UI", "Git", "Azure DevOps"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-indigo-400">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 px-4 py-3 rounded-lg text-center font-medium shadow-sm text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
