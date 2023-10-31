import { throttle } from './comfort'
import { getFactorFunction } from './plan/plan-item-position'
import { scrollHandlers } from './scroll'

export const initInteractive = () => {
    const section = document.getElementById('section-interactive')
    const element = document.getElementById('interactive-person')

    if (section && element) {
        const changeStyles = (transform: number, opacity: number) => {
            element.style.opacity = opacity.toString()
            element.style.transform = `translateY(${transform}px)`
        }

        const changeStylesThrottled = throttle(changeStyles, 100)

        const getFactor = getFactorFunction(element, 400, 0)
        const handler = () => {
            const factor = getFactor()

            let transform = (1 - factor) * 200
            transform = transform < 0 ? 0 : transform

            changeStylesThrottled(transform, factor)
        }

        scrollHandlers.push({
            cb: handler,
            section,
        })
    }
}
