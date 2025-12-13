export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m Ana 👋
      </h1>
      <p className="text-lg text-gray-400 max-w-xl mb-8">
        Full-stack developer building modern web applications
        with C#, .NET, and Next.js.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-white/20"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
