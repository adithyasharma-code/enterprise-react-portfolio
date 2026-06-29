import profileImage from "../../assets/profile.jpg";
import { profile } from "../../data/portfolioData";
import {
  Briefcase,
  MapPin,
  Clock3,
  Settings,
  Download,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Header */}
      <div className="h-28 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500" />

      {/* Photo */}
      <div className="-mt-16 flex justify-center">
        <img
          src={profileImage}
          alt="Aditya Sharma"
          className="h-40 w-40 rounded-full border-8 border-white object-cover shadow-xl"
        />
      </div>

      <div className="px-8 pb-8">

        <h2 className="mt-6 text-center text-3xl font-bold text-slate-900">
          Aditya Sharma
        </h2>

        <p className="mt-2 text-center text-slate-600">
          Senior Software Engineer
        </p>

        <div className="mt-5 flex justify-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🟢 Open to Opportunities
          </span>
        </div>

        <div className="my-8 border-t border-slate-200" />

        {/* Details */}

        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <Briefcase size={20} className="text-indigo-600" />
            <span className="text-slate-700 font-medium">
              HCLTech
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Clock3 size={20} className="text-indigo-600" />
            <span className="text-slate-700 font-medium">
              4+ Years Experience
            </span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin size={20} className="text-indigo-600" />
            <span className="text-slate-700 font-medium">
              India
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Settings size={20} className="text-indigo-600" />
            <span className="text-slate-700 font-medium">
              Teamcenter PLM
            </span>
          </div>

        </div>

        <div className="my-8 border-t border-slate-200" />

        {/* Expertise */}

        <div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Core Focus
          </h3>

          <p className="mt-3 text-slate-700 leading-7">
            Enterprise Teamcenter Administration,
            Active Workspace, BMIDE,
            ITK Development and Workflow Automation.
          </p>

        </div>

        {/* CTA */}

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
        >
          <Download size={18} />
          Download Resume
        </a>

      </div>

    </div>
  );
}