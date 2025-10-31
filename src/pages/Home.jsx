import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import welcomeContent from "../content/welcome.md?raw";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Carlaveris Jackson Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Carlaveris Jackson, a software engineer specializing in full-stack web development with AI integration and progressive web apps."
        />
        <meta name="author" content="Carlaveris Jackson" />
        <meta name="keywords" content="portfolio, software engineer, react, next.js, AI, PWA, #100Devs, Carlaveris Jackson" />
      </Helmet>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="relative mb-6">
        <img
          src="/cover-banner.jpg"
          alt="Full-Stack Software Engineer AI Integration Specialist"
          className="w-full max-w-3xl rounded-xl shadow-2xl mb-8"
        />
        <img
          src="/profile.png"
          alt="Carlaveris Jackson Profile"
          className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 rounded-full shadow-2xl w-56 h-56 object-cover border-8 border-white dark:border-gray-800"
        />
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 mt-24">
        Carl'averis Jackson
        </h1>
      <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
          Software Engineer | AI Integration | PWA Specialist | #100Devs
        </p>
        <article className="prose lg:prose-xl dark:prose-invert text-left mb-8 text-gray-800 dark:text-gray-100">
          <ReactMarkdown>{welcomeContent}</ReactMarkdown>
        </article>
      </div>
      <a
          href="/projects"
          className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </section>
    </>
  );
}
