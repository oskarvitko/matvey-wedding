type Callback = (e: Event, section?: Element) => void
type Handler = {
    cb: Callback
    section?: Element
}

export const scrollHandlers: Handler[] = []

export const initScroll = () => {
    scrollHandlers.forEach((handler) => {
        if (handler.section) {
            const oberver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            window.addEventListener('scroll', handler.cb)
                        } else {
                            window.removeEventListener('scroll', handler.cb)
                        }
                    })
                },
                { threshold: 0 },
            )
            oberver.observe(handler.section)
        } else {
            window.addEventListener('scroll', handler.cb)
        }
    })
}
