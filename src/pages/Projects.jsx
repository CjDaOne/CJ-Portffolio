import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Carlaveris Jackson Portfolio</title>
        <meta
          name="description"
          content="Browse featured web development projects by Carlaveris Jackson, including real-world freelance work, personal applications, and portfolio demos."
        />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Project
            title="LOWRY SASSY CREATIONZ"
            link="https://share.google/NjrJz1CSSrGPcLpnF"
            description="A custom product catalog and booking site for a boutique brand."
          />
          <Project
            title="Hardwicks Wood Candles"
            link="https://hardwicks-wood-candles.netlify.app/"
            description="E-commerce-ready product showcase built for a handmade candle shop."
          />
          
          <Project
            title="CJNF SOLUTIONS"
            link="https://cjnfsolutions.online/#"
            description="In-progress developer networking tool to find and match with collaborators."
          />
          <Project
            title="HealthTrack"
            link="#"
            description="A health metrics application for logging meals, medications, and vitals with secure Node.js backend and MongoDB."
          />
          <Project
            title="Serene Mind App"
            link="https://serenemindapp.netlify.app/"
            description="A full-stack PWA for mental wellness with AI-powered journaling, mood tracking, and offline-first architecture using Next.js 15 and Google Gemini."
          />
        </div>
      </section>
    </>
  );
}

function Project({ title, link, description, comingSoon = false }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
      <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {comingSoon ? (
        <span className="inline-block text-gray-500 dark:text-gray-400 font-medium">Coming Soon</span>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

