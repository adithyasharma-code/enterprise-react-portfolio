import { projects } from "../data/portfolioData";

export default function Projects() {

  const featured = projects.find(project => project.featured);

  return (

    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-700">
          Enterprise Portfolio
        </span>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Featured Enterprise Projects
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
          Real engineering initiatives focused on automation,
          enterprise support, digital manufacturing and measurable
          business impact across Teamcenter PLM environments.
        </p>

      </div>

      {/* Featured Project */}

      <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-12 shadow-sm transition duration-300 hover:shadow-xl">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              ★ Featured Project
            </span>

            <h3 className="mt-5 text-4xl font-bold text-slate-900">
              {featured.title}
            </h3>

          </div>

        </div>

        {/* Business Challenge */}

        <div className="mt-12">

          <h4 className="text-xl font-bold text-slate-900">
            Business Challenge
          </h4>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {featured.problem}
          </p>

        </div>

        {/* Solution */}

        <div className="mt-10">

          <h4 className="text-xl font-bold text-slate-900">
            Solution Delivered
          </h4>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {featured.solution}
          </p>

        </div>

        {/* Business Impact */}

        <div className="mt-10">

          <h4 className="text-xl font-bold text-slate-900">
            Business Impact
          </h4>

          <div className="mt-6 grid md:grid-cols-3 gap-4">

            {featured.impact.map(item => (

              <div
                key={item}
                className="rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-700"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        {/* Technologies */}

        <div className="mt-10">

          <h4 className="text-xl font-bold text-slate-900">
            Technology Stack
          </h4>

          <div className="mt-5 flex flex-wrap gap-3">

            {featured.technologies.map(tech => (

              <span
                key={tech}
                className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>
              </div>

      {/* Other Projects */}

      <div className="mt-10 grid gap-8 lg:grid-cols-3">

        {projects
          .filter((project) => !project.featured)
          .map((project) => (

            <div
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Business Challenge
                </h4>

                <p className="mt-3 text-slate-600 leading-7">
                  {project.problem}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Solution
                </h4>

                <p className="mt-3 text-slate-600 leading-7">
                  {project.solution}
                </p>

              </div>

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900">
                  Impact
                </h4>

                <ul className="mt-3 space-y-2">

                  {project.impact.map((item) => (

                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-600"
                    >

                      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600"></span>

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </div>

              <div className="mt-8 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (

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