import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { TechBadges } from "../components/TechBadges";
import { ScreenshotBlock } from "../components/ScreenshotBlock";
import { StepCarousel } from "../components/stepCarousel";

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <p className="font-cabinet text-l">Fant ikke prosjektet:(</p>;

  return (
    <section className="p-6 md:p-12 flex flex-col items-center gap-8 w-full max-w-6xl mx-auto">
      <h1 className="font-cabinet text-5xl">{project.title}</h1>
      <TechBadges tech={project.tech} />
      <p className="font-general max-w-6xl">{project.tagline}</p>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
        Se prosjektet på GitHub
      </a>

      <p className="font-general max-w-xl">{project.description}</p>
      <p className="font-general max-w-xl">{project.roleDescription}</p>

      {project.video && (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl"
        />
      )}

      {project.process && (
        <div className=" w-full rounded-lg bg-neutral-100 p-8 md:p-12">
          {project.processDescription && (
            <p className="font-general mb-8">{project.processDescription}</p>
          )}
          <div className="flex flex-col gap-4 md:flex-row md:items-center font-cabinet text-xl">
            {project.process.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span>{step}</span>

                {index < project.process.length - 1 && <span>→ </span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-24 md:gap-32">
        {project.screenshots?.map((shot) => (
          <ScreenshotBlock key={shot.image} {...shot} />
        ))}
      </div>

      {project.formSteps && <StepCarousel steps={project.formSteps} />}

      {project.outcome && (
        <p className="font-general text-center mt-4 bg-neutral-100">{project.outcome}</p>
      )}
    </section>
  );
}
