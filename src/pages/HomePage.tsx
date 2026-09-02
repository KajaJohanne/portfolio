import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
