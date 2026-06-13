export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">Get in Touch</h3>

        <p className="text-slate-300 mb-6">
          Interested in working together or want to discuss a project?
        </p>

        <a
          href="mailto:remanipriyarani@gmail.com"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
