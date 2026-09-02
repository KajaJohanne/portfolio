import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="prosjekter" className="p-6 md:p-12">
      <h2 className="font-cabinet text-4xl">Mine prosjekter</h2>
      <p className="font-general">
        Her er et utvalg av prosjektene mine, både egne ideer og akademiske
        oppgaver
      </p>

      <div className="mt-10 flex flex-col gap-16">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/prosjekter/${project.id}`}
            className={`flex flex-col gap-6 md:gap-12 md:items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <img
              src={project.image}
              alt={`Skjermbilde av ${project.title}`}
              className="w-full md:w-1/2 aspect-video object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="font-cabinet text-6xl">{project.title}</h3>
              <p className="font-general mt-2 max-w-sm">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
