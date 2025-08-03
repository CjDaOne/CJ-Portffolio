import { Helmet } from "react-helmet";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Carl'averis Jackson Portfolio</title>
        <meta
          name="description"
          content="Browse featured web development projects by Carl'averis Jackson, including real-world freelance work, personal applications, and portfolio demos."
        />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

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
            description="A mental health & wellness task tracker built with MERN stack (coming soon)."
          />
        </div>
      </section>
    </>
  );
}

function Project({ title, link, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 font-medium hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}

