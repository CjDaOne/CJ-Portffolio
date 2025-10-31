import { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';

export default function Contact() {
const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
const [status, setStatus] = useState("");

const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

  const handleSubmit = (e) => {
e.preventDefault();
setIsSending(true);
setStatus("");

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const publicKey = 'your_public_key';

    emailjs.init(publicKey);

    emailjs.send(serviceId, templateId, formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Carl'averis Jackson</title>
        <meta name="description" content="Contact Carl'averis Jackson to collaborate or inquire about web development services for your business." />
      </Helmet>

      <section className="min-h-screen px-6 py-12 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-center text-gray-700 dark:text-gray-200 mb-8">
            Interested in working together or have a question? Fill out the form and I'll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-xl">
          <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button type="submit" disabled={isSending} className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition disabled:opacity-50 font-semibold">
          {isSending ? "Sending..." : "Send Message"}
          </button>
            {status && <p className={`text-center mt-4 ${status.includes("successfully") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
