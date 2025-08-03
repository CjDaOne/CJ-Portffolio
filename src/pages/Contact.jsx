import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Future: connect this with Formspree, EmailJS, or backend
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Carl'averis Jackson</title>
        <meta name="description" content="Contact Carl'averis Jackson to collaborate or inquire about web development services for your business." />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-8">
            Interested in working together or have a question? Fill out the form and I’ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
