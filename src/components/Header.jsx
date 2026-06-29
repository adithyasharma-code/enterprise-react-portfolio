import { profile } from "../data/portfolioData";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-slate-900"
        >
          Aditya Sharma
          <span className="text-indigo-600">.</span>
        </a>

        {/* Navigation */}

        <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">

          {navItems.map((item) => (

            <li key={item.label}>

              <a
                href={item.href}
                className="transition hover:text-indigo-600"
              >
                {item.label}
              </a>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700"
        >
          Download Resume
        </a>

      </nav>

    </header>
  );
}