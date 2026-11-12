import Container from '@/components/ui/Container'
import { navLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'
import { useMagnetic } from '@/hooks/useMagnetic'

function NavLink({ href, children }) {
  const ref = useMagnetic({ radius: 40, strength: 0.15, maxOffset: 6, stretch: 0.04, group: 'nav' })

  return (
    <a
      ref={ref}
      href={href}
      className="relative inline-block font-medium text-muted transition-colors will-change-transform after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:text-ink hover:after:origin-left hover:after:scale-x-100 focus-visible:text-ink focus-visible:after:origin-left focus-visible:after:scale-x-100"
    >
      {children}
    </a>
  )
}

function Navbar() {
  const logoRef = useMagnetic({ strength: 0.25, maxOffset: 18, stretch: 0.1 })
  const hidden = useHideOnScroll()

  return (
    <header
      className={`sticky top-0 z-10 bg-canvas/90 text-ink backdrop-blur transition-transform duration-300 ease-out focus-within:translate-y-0 motion-reduce:transition-none ${hidden ? '-translate-y-full' : 'translate-y-0'} after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:scale-x-0 after:bg-ink/20 after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          ref={logoRef}
          href="#top"
          className="inline-block font-display text-2xl leading-none will-change-transform"
        >
          {profile.name}
        </a>
        <ul className="hidden gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

export default Navbar
