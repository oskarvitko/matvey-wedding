import { scrollHandlers } from '../scroll'
import { getFactorFunction } from './plan-item-position'

export const initPlanStripes = () => {
    const stripes = document.querySelectorAll<HTMLDivElement>('.plan__stripe')
    const section = document.getElementById('section-plan')
    const handler = () => stripes.forEach(handleRotate)
    if (section) {
        stripes.forEach((stripe) => {
            const getFactor = getFactorFunction(stripe, 300, -0.75)

            const handler = () => {
                const factor = getFactor()
                stripe.style.opacity = factor.toString()
            }

            scrollHandlers.push({ cb: handler, section })
        })

        window.addEventListener('resize', handler)
        handler()
    }
}

const handleRotate = (stripe: HTMLDivElement) => {
    const img = stripe.querySelector('img')

    const fromId = stripe.getAttribute('data-from') || ''
    const toId = stripe.getAttribute('data-to') || ''

    const from = document.getElementById(fromId)
    const to = document.getElementById(toId)

    if (img && from && to) {
        const fromPosition = from.getBoundingClientRect()
        const toPosition = to.getBoundingClientRect()
        const angle = findAngleBetweenPoints(
            fromPosition.x,
            fromPosition.y,
            toPosition.x,
            toPosition.y,
        )

        img.style.transform = `rotate(${angle}deg)`
    }
}

const findAngleBetweenPoints = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
) => {
    const deltaX = x2 - x1
    const deltaY = y2 - y1

    const angleInRadians = Math.atan2(deltaY, deltaX)

    const angleInDegrees = angleInRadians * (180 / Math.PI)

    return angleInDegrees
}
