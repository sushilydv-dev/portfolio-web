import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { skills } from '@/data/skills'

function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="mb-4 text-lg font-semibold">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
