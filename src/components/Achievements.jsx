import { achievements } from "../data/portfolioData";

import {
  Award,
  Zap,
  DollarSign,
  Target,
} from "lucide-react";

const icons = {
  award: Award,
  zap: Zap,
  dollar: DollarSign,
  target: Target,
};

export default function Achievements() {

  return (

    <section
      id="achievements"
      className="max-w-7xl mx-auto px-6 py-28"
    >

      <div className="text-center">

        <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-700">
          Professional Recognition
        </span>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Key Achievements
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
          Measurable contributions that improved enterprise
          operations, engineering productivity and business value.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {achievements.map((achievement) => {

          const Icon = icons[achievement.icon];

          return (

            <div
              key={achievement.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="inline-flex rounded-2xl bg-indigo-100 p-4">

                <Icon
                  size={34}
                  className="text-indigo-600"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {achievement.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {achievement.description}
              </p>
                          </div>

          );

        })}

      </div>

    </section>

  );

}