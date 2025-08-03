import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Carl'averis Jackson Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Carl'averis Jackson, a full-stack developer and member of #100Devs. Specializing in building modern web apps and solving real-world problems."
        />
        <meta name="author" content="Carl'averis Jackson" />
        <meta name="keywords" content="portfolio, full-stack, react, developer, #100Devs, Carl'averis Jackson" />
      </Helmet>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Carl'averis Jackson
        </h1>

        <p className="text-xl text-gray-700 mb-6">
          Full-Stack Developer | Problem Solver | #100Devs
        </p>

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

