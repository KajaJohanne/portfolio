import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { TechBadges } from "../components/TechBadges";
import { ScreenshotBlock } from "../components/ScreenshotBlock";
import { StepCarousel } from "../components/stepCarousel";
import { FiArrowUpRight } from "react-icons/fi";
import { asset } from "../lib/assets";

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <p className="font-cabinet text-l">Fant ikke prosjektet:(</p>;

  return (
    <section className="bg-cream">
      <div className="flex flex-col items-center gap-20 w-full max-w-4xl mx-auto p-6 py-16 md:p-12 md:py-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <p className="font-general text-sm text-coral">{project.category}</p>
          <h1 className="font-cabinet text-5xl md:text-6xl text-ink">
            {project.title}
          </h1>
          <p className="font-general max-w-lg text-ink-muted">
            {project.tagline}
          </p>
          <TechBadges tech={project.tech} />

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-general text-sm text-ink border border-ink/20 rounded-full px-4 py-2 mt-2 hover:border-coral hover:text-coral transition"
          >
            Se prosjektet på GitHub <FiArrowUpRight />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-general text-sm text-ink border border-ink/20 rounded-full px-4 py-2 hover:border-coral hover:text-coral transition"
            >
              Se live-versjon <FiArrowUpRight />
            </a>
          )}
        </div>

        {/* Video */}
        {project.video && (
          <video
            src={asset(project.video)}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-5xl shadow-2xl rounded-2xl"
          />
        )}

        {/* Beskrivelse */}
        <div className="flex flex-col gap-6 font-general max-w-xl text-ink-muted leading-relaxed border-l-2 border-coral pl-6 py-2">
          <p>{project.description}</p>
          {project.roleDescription && <p>{project.roleDescription}</p>}
        </div>

        {/* Prosess */}
        {project.process && (
          <div className="w-screen max-w-5xl rounded-2xl bg-blue/30 p-8 md:p-12">
            {project.processDescription && (
              <p className="font-general mb-8 text-ink-muted">
                {project.processDescription}
              </p>
            )}
            <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center font-cabinet text-lg">
              {project.process.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span>{step}</span>

                  {index < project.process.length - 1 && (
                    <span className="text-coral">→ </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bilder */}
        <div className="w-full flex flex-col gap-32 md:gap-40">
          {project.screenshots?.map((shot, index) => (
            <ScreenshotBlock key={asset(shot.image)} {...shot} index={index} />
          ))}
        </div>

        {project.formSteps && <StepCarousel steps={project.formSteps} />}

        {/* Utfall */}
        {project.outcome && (
          <p className="font-general max-w-lg text-center text-ink border-l-2 border-coral pl-6 py-2">
            {project.outcome}
          </p>
        )}
      </div>
    </section>
  );
}
