export function scrollToSection(id) {
  const element = document.getElementById(id)

  if (!element) {
    return
  }

  const start = window.scrollY
  const target = element.getBoundingClientRect().top + window.scrollY
  const distance = target - start
  const duration = 800 // milliseconds
  let startTime = null

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const scroll = (currentTime) => {
    if (startTime === null) {
      startTime = currentTime
    }

    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutCubic(progress)

    window.scrollTo(0, start + distance * ease)

    if (progress < 1) {
      requestAnimationFrame(scroll)
    }
  }

  requestAnimationFrame(scroll)
}
