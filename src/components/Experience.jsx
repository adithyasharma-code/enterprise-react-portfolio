import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-28"
    >

      <div className="text-center">

        <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-700">
          Career Journey
        </span>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Professional Experience
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
          Over 4 years of enterprise experience delivering
          Teamcenter PLM administration, Active Workspace
          configuration, BMIDE customization, ITK development,
          workflow automation and global production support.
        </p>

      </div>

      <div className="mt-20 space-y-10">

        {experience.map((job) => (

          <div
            key={job.title}
            className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

              <div>

                <div className="flex items-center gap-4 flex-wrap">

                  <h3 className="text-3xl font-bold text-slate-900">
                    {job.title}
                  </h3>

                  {job.promoted && (
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                      Promoted
                    </span>
                  )}

                </div>

                <p className="mt-3 text-xl font-semibold text-indigo-600">
                  {job.company}
                </p>

              </div>

              <span className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 h-fit">
                {job.duration}
              </span>

            </div>

            <div className="mt-8 grid gap-4">

              {job.responsibilities.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <div className="mt-2 h-3 w-3 rounded-full bg-indigo-600 flex-shrink-0" />

                  <p className="text-lg leading-8 text-slate-600">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Teamcenter",
                "Active Workspace",
                "BMIDE",
                "ITK",
                "Workflow",
                "Enterprise Support",
              ].map((tech) => (

                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}