import HeroLeft from "./HeroLeft";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50"
    >
      {/* Background Decorations */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-100 opacity-40 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sky-100 opacity-40 blur-3xl"></div>

      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Side */}

          <HeroLeft />

          {/* Right Side */}

          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-md">

              <ProfileCard />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}