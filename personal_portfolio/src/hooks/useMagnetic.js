import { useEffect, useRef } from 'react'

// Elements that share a `group` name compete: only the one nearest the cursor is attracted.
const groups = new Map()

// Pulls an element toward the cursor when it comes within `radius` px of the element's edge,
// stretching it in the direction of the pull. When the cursor leaves, a springy release makes it
// overshoot and wobble back to its original position and shape.
export function useMagnetic({ radius = 90, strength = 0.35, maxOffset = 28, stretch = 0.14, group } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    const pos = { x: 0, y: 0 }
    const vel = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    let attracted = false
    let frame = 0
    let last = 0

    const render = () => {
      const dist = Math.hypot(pos.x, pos.y)
      if (dist < 0.05) {
        el.style.transform = ''
        return
      }
      const angle = Math.atan2(pos.y, pos.x)
      const s = 1 + Math.min(dist / maxOffset, 1.2) * stretch
      el.style.transform =
        `translate(${pos.x}px, ${pos.y}px) rotate(${angle}rad) ` +
        `scale(${s}, ${1 / Math.sqrt(s)}) rotate(${-angle}rad)`
    }

    const tick = (now) => {
      const dt = Math.min((now - last) / 16.67, 3)
      last = now
      // Firm, smooth spring while attracted; looser, underdamped spring on release so it bounces.
      const k = attracted ? 0.16 : 0.1
      const damping = attracted ? 0.72 : 0.84
      for (const axis of ['x', 'y']) {
        vel[axis] = (vel[axis] + (target[axis] - pos[axis]) * k * dt) * damping ** dt
        pos[axis] += vel[axis] * dt
      }
      render()
      const settled =
        Math.abs(target.x - pos.x) < 0.05 && Math.abs(target.y - pos.y) < 0.05 &&
        Math.abs(vel.x) < 0.05 && Math.abs(vel.y) < 0.05
      if (settled) {
        pos.x = target.x
        pos.y = target.y
        render()
        frame = 0
        return
      }
      frame = requestAnimationFrame(tick)
    }

    const wake = () => {
      if (frame) return
      last = performance.now()
      frame = requestAnimationFrame(tick)
    }

    // Measure without the current transform so the pull doesn't feed back into itself.
    const measure = (e) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2 - pos.x)
      const dy = e.clientY - (rect.top + rect.height / 2 - pos.y)
      const edgeDist = Math.hypot(Math.max(Math.abs(dx) - rect.width / 2, 0), Math.max(Math.abs(dy) - rect.height / 2, 0))
      return { dx, dy, edgeDist }
    }

    const member = { measure }
    const peers = group ? groups.get(group) ?? new Set() : null
    if (peers) {
      peers.add(member)
      groups.set(group, peers)
    }

    const onMove = (e) => {
      const { dx, dy, edgeDist } = measure(e)
      const nearest = !peers || [...peers].every((m) => m === member || m.measure(e).edgeDist > edgeDist)

      attracted = edgeDist < radius && nearest
      if (attracted) {
        const pull = Math.hypot(dx, dy) * strength
        const scale = pull > maxOffset ? maxOffset / pull : 1
        target.x = dx * strength * scale
        target.y = dy * strength * scale
      } else {
        target.x = 0
        target.y = 0
      }
      wake()
    }

    const onLeave = () => {
      attracted = false
      target.x = 0
      target.y = 0
      wake()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      peers?.delete(member)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
      el.style.transform = ''
    }
  }, [radius, strength, maxOffset, stretch, group])

  return ref
}
