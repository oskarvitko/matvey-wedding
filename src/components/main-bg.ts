import { scrollHandlers } from './scroll'

export const initMainBg = () => {
    const bg = document.getElementById('main-bg')
    const section = document.getElementById('section-main')
    if (bg && section) {
        const height = bg.getBoundingClientRect().height

        const handler = () => {
            const scrollTop = window.scrollY
            const potentialKoef = (height + scrollTop) / height + 0.1
            const koef = potentialKoef > 2 ? 2 : potentialKoef
            bg.style.transform = `scale(${koef})`
        }

        scrollHandlers.push({ cb: handler, section })

        handler()
    }

    const main = document.getElementById('section-main')
    if (main) {
        const isIphone = navigator.userAgent.toLowerCase().includes('iphone')
        if (isIphone) {
            main.classList.add('iphone')
        }
    }
}
