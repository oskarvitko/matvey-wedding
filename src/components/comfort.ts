import { getFactorFunction } from './plan/plan-item-position'
import { scrollHandlers } from './scroll'

export const initComfort = () => {
    const text = document.getElementById('comfort-text')
    const section = document.getElementById('section-comfort')
    if (text && section) {
        const getFactor = getFactorFunction(text, 300, -0.6)
        const handler = () => {
            const factor = 1 - getFactor()
            text.style.transform = `translate(-50%, ${factor * 40 - 50}%)`
        }

        scrollHandlers.push({
            cb: throttle(handler, 100),
            section,
        })
    }
}

export function throttle(func: Function, delay: number) {
    let timeout: number | null = null

    return function (this: any, ...args: any) {
        if (!timeout) {
            func.apply(this, args)
            timeout = setTimeout(() => {
                timeout = null
            }, delay)
        }
    }
}
