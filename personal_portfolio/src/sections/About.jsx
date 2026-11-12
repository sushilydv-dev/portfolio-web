import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading title="About" />
        <p className="max-w-2xl text-lg text-muted">{profile.about}</p>
      </Container>
    </section>
  )
}

export default About
