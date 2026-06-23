export default function App() {
  const resumeUrl =
  "https://raw.githubusercontent.com/adithyasharma-code/aditya-sharma-resume/main/Aditya_Sharma_SeniorSoftwarerEngineer.pdf";
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <section className="text-center">

          <p className="text-indigo-600 font-semibold mb-4">
            Senior Software Engineer | Teamcenter PLM Professional
          </p>

          <h1 className="text-6xl font-bold mb-6">
            Aditya Sharma
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Teamcenter PLM professional with 4+ years of experience
            delivering enterprise support, BMIDE customization,
            Active Workspace administration, performance optimization,
            and digital engineering solutions for global manufacturing
            organizations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl"
            >
              Download Resume
            </a>

            <a
              href="https://linkedin.com/in/aditya-s-b581b8135"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-xl"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/adithyasharma-code"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-xl"
            >
              GitHub
            </a>

            <a
              href="https://wa.me/919340863824?text=Hi%20Aditya,%20Are%20you%20looking%20for%20job%20change?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-xl"
            >
              WhatsApp
            </a>

          </div>

        </section>

      </div>
    </div>
  );
}