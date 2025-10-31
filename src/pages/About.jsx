import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Carlaveris Jackson Portfolio</title>
        <meta
          name="description"
          content="Learn more about Carlaveris Jackson, a software engineer with expertise in full-stack development, AI integration, and progressive web apps."
        />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">About Me</h2>

          <p className="text-lg mb-4 leading-relaxed text-center text-gray-700 dark:text-gray-200">
            I'm <strong>Carl'averis Jackson</strong>, an <strong>Engineer • AI Integration Specialist</strong> with expertise in full-stack web development, progressive web apps (PWAs), and cutting-edge AI/ML integration.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Skills & Technologies</h3>
          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            <li><strong>Languages:</strong> JavaScript, TypeScript, CSS</li>
            <li><strong>Front-End:</strong> React, Next.js 15, TailwindCSS, ShadCN UI, Bootstrap</li>
            <li><strong>Back-End:</strong> Node.js, Express, Next.js API Routes</li>
            <li><strong>Database & Auth:</strong> MongoDB, Mongoose, NextAuth.js</li>
            <li><strong>AI & ML:</strong> Google Gemini API, Google Genkit</li>
            <li><strong>Cloud & DevOps:</strong> Vercel, Netlify, Heroku, Git, CI/CD</li>
            <li><strong>PWAs:</strong> Service Workers, Web Push, Offline-First</li>
            <li><strong>Testing:</strong> Jest, Playwright, React Testing Library</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Experience Highlights</h3>
          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            <li><strong>100Devs Agency (2021–2025):</strong> Delivered 10+ responsive web apps, built RESTful APIs with Node.js/Express/MongoDB, collaborated in agile sprints.</li>
            <li><strong>Serene Mind App:</strong> Full-stack PWA with AI journaling, Next.js 15, Google Gemini for insights, offline-first architecture.</li>
            <li><strong>HealthTrack Project:</strong> Health metrics app with secure Node.js backend and MongoDB.</li>
            <li><strong>Healthcare Background:</strong> 15+ years as caregiver/nurse assistant, applying problem-solving and communication skills to software development.</li>
          </ul>

          <p className="text-lg mb-6 leading-relaxed text-center text-gray-700 dark:text-gray-200">
            Certified in Full-Stack Web Development from 100Devs Agency, with additional training in project management and nursing assistance.
          </p>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-block mr-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
