import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <section id="om-meg">her er om meg delen</section>
    </div>
  );
}
