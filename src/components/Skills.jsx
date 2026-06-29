import { skills } from "../data/portfolioData";

export default function Skills() {

  return (

    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-28"
    >

      <div className="text-center">

        <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-700">
          Technical Expertise
        </span>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Core Technical Capabilities
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
          Enterprise technologies, platforms and development
          tools used to deliver Teamcenter PLM solutions for
          global engineering organizations.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {skills.map((group) => (

          <div
            key={group.category}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <h3 className="text-2xl font-bold text-slate-900">
              {group.category}
            </h3>

            <div className="mt-8 flex flex-wrap gap-3">

              {group.items.map((item) => (

                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-700 transition group-hover:bg-indigo-100"
                >
                  {item}
                </span>

              ))}

            </div>
          </div>

        ))}

      </div>

      {/* Core Competencies */}

      <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

        <h3 className="text-3xl font-bold text-slate-900 text-center">
          Core Competencies
        </h3>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {[
            "Enterprise Teamcenter Administration",
            "Active Workspace",
            "PLM Support",
            "L2/L3 Production Support",
            "Workflow Automation",
            "BMIDE Customization",
            "ITK Development",
            "Performance Optimization",
            "Incident Management",
            "Root Cause Analysis",
            "Engineering Change Management",
            "Digital Manufacturing",
          ].map((item) => (

            <span
              key={item}
              className="rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </section>

  );

}