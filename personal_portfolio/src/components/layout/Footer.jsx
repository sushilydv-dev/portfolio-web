import Container from '@/components/ui/Container'
import { profile } from '@/data/profile'
import { socials } from '@/data/socials'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <p>
          © {currentYear} {profile.name}
        </p>
        <ul className="flex gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
