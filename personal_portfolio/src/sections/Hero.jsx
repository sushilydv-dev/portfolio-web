import Container from '@/components/ui/Container'
import { profile } from '@/data/profile'

function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-4rem)] items-center bg-canvas py-16 text-ink">
      <Container>
        {profile.available && (
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-sm transition-colors hover:border-ink"
          >
            <span className="size-2 rounded-full bg-emerald-500" />
            Available for freelance projects
          </a>
        )}
        <h1 className="mt-8 font-display text-[clamp(4rem,17vw,15rem)] leading-[0.85] font-normal">
          <span className="block">{profile.firstName}</span>
          <span className="block">{profile.lastName}</span>
        </h1>
        <p className="mt-8 text-xl font-medium md:text-2xl">{profile.role}</p>
      </Container>
    </section>
  )
}

export default Hero
