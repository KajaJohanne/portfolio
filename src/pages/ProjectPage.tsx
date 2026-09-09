import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { TechBadges } from "../components/TechBadges";
import { ScreenshotBlock } from "../components/ScreenshotBlock";

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <p className="font-cabinet text-l">Fant ikke prosjektet:(</p>;

  return (
    <section className="p-6 md:p-12 flex flex-col items-center gap-8 max-w-3xl mx-auto">
      <h1 className="font-cabinet text-5xl">{project.title}</h1>
      <TechBadges tech={project.tech} />
      <p className="font-general max-w-md">{project.description}</p>
      
      {project.video && (
        <video 
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-sm"
        />
      )}

      <div className="w-full flex flex-col gap-24 md:gap-32">
        {project.screenshots?.map((shot) => (
            <ScreenshotBlock key={shot.image} {...shot}/>
        ))}
      </div>
    </section>
  );
}
