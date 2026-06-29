import { profile } from "../data/portfolioData";

export default function Footer(){

  return(

    <footer className="border-t mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-4 text-slate-600">

          {profile.email}

          <br/>

          {profile.phone}

        </p>

        <div className="flex gap-6 mt-8 flex-wrap">

          <a href={profile.linkedin} target="_blank">LinkedIn</a>

          <a href={profile.github} target="_blank">GitHub</a>

          <a href={profile.calendly} target="_blank">Calendly</a>

          <a href={profile.whatsapp} target="_blank">WhatsApp</a>

        </div>

        <p className="mt-10 text-sm text-slate-500">

          © 2026 Aditya Sharma

        </p>

      </div>

    </footer>

  )

}