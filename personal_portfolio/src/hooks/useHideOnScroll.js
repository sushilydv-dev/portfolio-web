import { useEffect, useState } from 'react'

// Returns true once the page has scrolled down past `offset` px, and false again as soon as the
// user scrolls up anywhere. `tolerance` ignores tiny scroll jitter (e.g. trackpad bounce).
export function useHideOnScroll({ offset = 120, tolerance = 6 } = {}) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - lastY
      if (Math.abs(delta) < tolerance) return
      setHidden(y > offset && delta > 0)
      lastY = y
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [offset, tolerance])

  return hidden
}
