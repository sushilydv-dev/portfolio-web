import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Have a project or opportunity in mind? Let's talk."
        />
        <a href={`mailto:${profile.email}`} className="text-2xl font-medium text-accent">
          {profile.email}
        </a>
      </Container>
    </section>
  )
}

export default Contact
