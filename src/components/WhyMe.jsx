import { whyMe } from "../data/portfolioData";

export default function WhyMe() {
  return (
    <section id="why-me" className="max-w-6xl mx-auto px-6 py-20">

      <div className="mb-12">

  <p className="text-indigo-600 text-sm font-semibold uppercase tracking-[0.2em]">
    Value
  </p>

  <h2 className="text-5xl font-bold mt-2">
    Why Work With Me
  </h2>

</div>

      <div className="grid md:grid-cols-2 gap-8">

        {whyMe.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-7">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}