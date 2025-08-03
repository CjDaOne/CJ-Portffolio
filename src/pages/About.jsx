import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Carl'averis Jackson Portfolio</title>
        <meta
          name="description"
          content="Learn more about Carl'averis Jackson, a passionate full-stack developer focused on building solutions for small to medium-sized businesses using modern web technologies and AI tools."
        />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg mb-4 leading-relaxed">
            I'm <strong>Carl'averis Jackson</strong>, a full-stack developer with a background in healthcare and a new mission:
            building powerful, modern web solutions for small to medium-sized businesses.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            I combine frontend tools like <strong>React</strong> and <strong>TailwindCSS</strong> with backend tech like
            <strong> Node.js</strong> and <strong>MongoDB</strong>. I also leverage <strong>AI-powered workflows</strong> to rapidly deliver quality code and user experiences.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            Whether you need a sleek marketing site, a robust scheduling system, or a wellness-focused productivity app — I build
            solutions that are fast, accessible, and designed to help your business grow.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
