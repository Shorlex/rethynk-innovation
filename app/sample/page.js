// components/DigitalExperience.jsx


export default function DigitalExperience() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Design Isn’t Just About Beauty—It’s About Impact
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We create immersive websites and applications that drive engagement,
            accelerate sales, and leave a lasting impression.
          </p>
          <button className="text-lg px-6 py-3">
            💡 Start Your Digital Redesign Today
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Why Great Design Matters
          </h2>
          <p className="text-lg mb-6">
            A beautiful website isn’t enough. If it doesn’t convert, engage, or
            guide your users, it’s not working for you. Today’s users expect
            seamless, fast, and personalized digital experiences—or they leave.
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🖥️",
                title: "Website & App UI Design",
                desc: "Modern, responsive layouts tailored to your brand.",
              },
              {
                icon: "🧠",
                title: "User Journey Mapping",
                desc: "Design with psychology to guide users to action.",
              },
              {
                icon: "🛍️",
                title: "E-Commerce Optimization",
                desc: "Reduce cart abandonment with optimized UX.",
              },
              {
                icon: "📸",
                title: "AR/3D Product Configurators",
                desc: "Virtual product try-ons and configurators.",
              },
              {
                icon: "🎯",
                title: "Personalized Experiences",
                desc: "Machine learning powered interfaces and flows.",
              },
              {
                icon: "🔍",
                title: "UX Research & Testing",
                desc: "Real-user testing to optimize performance.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Process
          </h2>
          <ol className="space-y-4 text-lg list-decimal list-inside">
            <li>
              <strong>Discovery & Brand Deep-Dive:</strong> Understanding your
              goals and audience.
            </li>
            <li>
              <strong>Wireframing & UX Strategy:</strong> Planning the user
              journey and layout structure.
            </li>
            <li>
              <strong>High-Fidelity Design:</strong> Pixel-perfect, clickable
              prototypes in Figma or Webflow.
            </li>
            <li>
              <strong>Development & Integration:</strong> Frontend + backend
              integration using modern stacks.
            </li>
            <li>
              <strong>Launch & Optimization:</strong> We monitor, test, and
              iterate after going live.
            </li>
          </ol>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">What You Can Expect</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-lg">
            <p>💡 2–3x increase in user engagement</p>
            <p>🛒 40% shorter sales cycles</p>
            <p>📲 Higher mobile conversions</p>
            <p>⏳ Faster decision-making from improved UX</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Elevate Your Digital Experience?
          </h2>
          <p className="mb-6 text-lg">
            Let’s craft a design that converts. Reach out today.
          </p>
          <button className="bg-white text-indigo-700 hover:bg-gray-100 text-lg px-6 py-3">
            🚀 Let’s Build a High-Converting Design →
          </button>
        </div>
      </section>
    </div>
  );
}
