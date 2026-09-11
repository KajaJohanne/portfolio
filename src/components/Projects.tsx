import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { TechBadges } from "./TechBadges";

export function Projects() {
  return (
    <section id="prosjekter" className="p-6 bg-cream/30 md:p-12">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-coral" />
        <h2 className="font-cabinet text-4xl">Mine prosjekter</h2>

        <span className="h-px w-12 bg-coral" />
      </div>
      <p className="mt-3 text-center font-general text-ink-muted">
        Egne ideer og akademiske prosjekter
      </p>

      <div className="mt-10 flex flex-col gap-32 md:gap-28 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const content = (
            <>
            <div className="w-full md:w-1/2 rounded-xl ">
              <img
                src={project.image}
                alt={`Skjermbilde av ${project.title}`}
                className="w-full aspect-video object-cover rounded-lg shadow-sm"
              />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-cabinet text-3xl font-bold text-ink">
                  {project.title}
                </h3>
                <p className="font-general mt-2 max-w-sm text-ink-muted">
                  {project.tagline}
                </p>
                <TechBadges tech={project.tech} />
              </div>
            </>
          );

          const cardClasses = `flex flex-col gap-6 md:gap-12 md:items-center rounded-2xl bg-coral/2 border border-ink/10 p-6 md:p-10 shadow-lg hover:shadow-xl transition ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`;

          return project.externalOnly ? (
            <a
              key={project.id}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {content}
            </a>
          ) : (
            <Link
              key={project.id}
              to={`/prosjekter/${project.id}`}
              className={cardClasses}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
