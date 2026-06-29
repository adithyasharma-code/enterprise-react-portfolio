import { profile } from "../data/portfolioData";
import { Mail, Download } from "lucide-react";

const contactItems = [
  {
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
  },
  {
    title: "GitHub",
    value: "View my repositories",
    href: profile.github,
  },
  {
    title: "WhatsApp",
    value: "Let's have a conversation",
    href: profile.whatsapp,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-700">
          Let's Connect
        </span>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Let's Build Something Great Together
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Ready to contribute to enterprise Teamcenter PLM initiatives,
          solve complex engineering challenges, and deliver measurable
          business value.
        </p>

      </div>

      {/* Availability */}

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        {[
          "Full-Time Opportunities",
          "Teamcenter Consulting",
          "Enterprise Support",
          "Remote Opportunities",
        ].map((item) => (

          <span
            key={item}
            className="rounded-full bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700"
          >
            ✓ {item}
          </span>

        ))}

      </div>

      {/* Contact Cards */}

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {contactItems.map((item) => (

          <a
            key={item.title}
            href={item.href}
            target={item.title === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-xl"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-2xl font-bold text-indigo-600 transition-all duration-300 group-hover:scale-110">

              {item.title === "Email" && "✉"}
              {item.title === "LinkedIn" && "in"}
              {item.title === "GitHub" && "</>"}
              {item.title === "WhatsApp" && "💬"}

            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {item.value}
            </p>

          </a>

        ))}

      </div>

      {/* Resume CTA */}

      <div className="mt-20 text-center">

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-2xl"
        >
          <Download size={22} />
          Download Resume
        </a>

      </div>

    </section>
  );
}