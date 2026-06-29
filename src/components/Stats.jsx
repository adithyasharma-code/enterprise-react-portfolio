import { statistics } from "../data/portfolioData";
import AnimatedCounter from "./AnimatedCounter";
import {
  Briefcase,
  Ticket,
  TrendingUp,
  Award,
} from "lucide-react";

const icons = {
  briefcase: Briefcase,
  ticket: Ticket,
  trending: TrendingUp,
  badge: Award,
};

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {statistics.map((stat) => {

          const Icon = icons[stat.icon];

          return (

            <div
              key={stat.label}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex justify-center">

                <div className="rounded-2xl bg-indigo-100 p-4">

                  <Icon
                    size={28}
                    className="text-indigo-600"
                  />

                </div>

              </div>

<h3 className="mt-6 text-center text-5xl font-black text-indigo-600">

  {stat.value === "4+" && (
    <AnimatedCounter
      value={4}
      suffix="+"
    />
  )}

  {stat.value === "200+" && (
    <AnimatedCounter
      value={200}
      suffix="+"
    />
  )}

  {stat.value === "45%" && (
    <AnimatedCounter
      value={45}
      suffix="%"
    />
  )}

  {stat.value === "$15K" && (
    <AnimatedCounter
      value={15}
      prefix="$"
      suffix="K"
    />
  )}

</h3>

              <p className="mt-4 text-center text-slate-600 font-medium leading-7">
                {stat.label}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}