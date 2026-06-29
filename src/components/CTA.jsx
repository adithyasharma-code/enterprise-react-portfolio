import { profile } from "../data/portfolioData";

export default function CTA() {
  return (

    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="rounded-3xl bg-indigo-600 text-white p-12 text-center">

        <h2 className="text-4xl font-bold">
          Open to Senior Teamcenter PLM Opportunities
        </h2>

        <p className="mt-6 text-indigo-100 max-w-3xl mx-auto">
          Interested in Teamcenter Administration,
          PLM Consulting,
          Active Workspace,
          Solution Delivery,
          Digital Engineering
          and Enterprise Support roles.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold"
          >
            Download Resume
          </a>

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-xl"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>

  );
}