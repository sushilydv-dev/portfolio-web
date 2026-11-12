import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'

function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading title="Projects" subtitle="Things I've built." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-muted">{project.description}</p>
              <ul className="mt-4 mb-6 flex flex-wrap gap-2 font-mono text-xs">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="mt-auto flex gap-4 text-accent">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
