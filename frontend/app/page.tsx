import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <section id="contact" className="py-24 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">Contact</h2>
          <p className="opacity-70">You can reach me at <a href="mailto:ana@example.com" className="text-[rgb(var(--primary))] hover:underline">zderic.ana20@gmail.com</a></p>
        </section>
      </main>
    </>
  );
}