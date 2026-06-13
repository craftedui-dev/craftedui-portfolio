export default function Projects() {
  const projects = [
    {
      title: "AskOU – Generative‑AI Powered Platform",
      tech: "React, TypeScript, Azure, AI Integration",
      desc: "Enhanced UI workflows and integrated AI‑driven API features."
    },
    {
      title: "Home Depot – Auto Dispute Resolution",
      tech: "React, Node.js, Blockchain",
      desc: "Built secure pallet tracking and automated dispute workflows."
    },
    {
      title: "Barclays – Customer Data Platform",
      tech: "React, .NET Core, Azure",
      desc: "Delivered secure customer data management interfaces."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-indigo-400">Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-slate-800 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-slate-50">{p.title}</h4>
              <p className="text-indigo-400 font-medium">{p.tech}</p>
              <p className="mt-2 text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
