import { profile } from "../../data/portfolioData";

export default function HeroLeft() {
  return (
    <div>

      {/* Availability Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">

        <span className="h-3 w-3 rounded-full bg-emerald-500"></span>

        <span className="text-sm font-semibold text-emerald-700">
          AVAILABLE FOR OPPORTUNITIES
        </span>

      </div>

      {/* Heading */}

      <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-none text-slate-900">
        {profile.name}
      </h1>

      <h2 className="mt-5 text-3xl font-bold text-indigo-600">
        Senior Software Engineer
      </h2>

      <p className="mt-2 text-xl font-medium text-slate-700">
        Enterprise Teamcenter PLM Consultant
      </p>

      {/* Summary */}

      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">

        Helping global engineering and manufacturing organizations
        deliver scalable Teamcenter PLM solutions through
        administration, Active Workspace configuration,
        BMIDE customization, ITK development,
        workflow automation and enterprise production support.

      </p>
            {/* CTA Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-indigo-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700"
        >
          Download Resume
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-medium transition hover:bg-slate-100"
        >
          LinkedIn
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-medium transition hover:bg-slate-100"
        >
          GitHub
        </a>

        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-medium transition hover:bg-slate-100"
        >
          WhatsApp
        </a>

      </div>

      {/* Core Expertise */}

      <div className="mt-14">

        <h3 className="text-lg font-bold text-slate-900">
          Core Expertise
        </h3>

        <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-4">

          {[
            "Teamcenter Administration",
            "Active Workspace",
            "BMIDE Customization",
            "ITK Development",
            "Workflow Automation",
            "L2/L3 Production Support",
            "Performance Optimization",
            "Enterprise PLM",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">

                <span className="text-sm font-bold text-emerald-600">
                  ✓
                </span>

              </div>

              <span className="text-slate-700 font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}