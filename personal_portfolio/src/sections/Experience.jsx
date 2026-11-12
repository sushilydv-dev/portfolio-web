import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading title="Experience" />
        <ol className="border-l-2 border-line">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="pb-8 pl-6">
              <span className="font-mono text-sm text-accent">{job.period}</span>
              <h3 className="mt-1 text-lg font-semibold">
                {job.role} · {job.company}
              </h3>
              <p className="mt-1 text-muted">{job.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default Experience
