export default function Experience() {
  const roles = [
    {
      company: "The Open University",
      role: "Software Engineer",
      details:
        "React, TypeScript, Azure, AI‑powered UI workflows (AskOU), .NET Core API integration."
    },
    {
      company: "IBM",
      role: "Lead Frontend Engineer",
      details:
        "React, Angular, Node.js, enterprise UI systems for Barclays, Home Depot, Pfizer, Zoetis, Travelport."
    }
  ];

  const earlier = [
    "Senior Software Engineer – L&T Technology Services",
    "Consultant – Genpact Headstrong",
    "Software Engineer – Mphasis (HP Company)",
    "Team Lead – IVA Systems"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-indigo-400">Experience</h3>

        <div className="space-y-8">
          {roles.map((job) => (
            <div key={job.company} className="bg-slate-800 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-slate-50">{job.company}</h4>
              <p className="text-indigo-400 font-medium">{job.role}</p>
              <p className="mt-2 text-slate-300">{job.details}</p>
            </div>
          ))}
        </div>

        {/* Earlier Experience */}
        <div className="mt-12">
          <h4 className="text-2xl font-bold text-indigo-400 mb-4">Earlier Experience</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            {earlier.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
