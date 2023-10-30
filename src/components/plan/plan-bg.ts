import { scrollHandlers } from '../scroll'

const BG_COLOR = '#e8cebf'

const TOP_OFFSET = 200
const BOT_OFFSET = 400

export const initPlanBG = () => {
    const planSection = document.getElementById('section-plan')
    if (planSection) {
        const handler = () => {
            const sectionRect = planSection.getBoundingClientRect()

            let factor = 0

            const top = sectionRect.top + TOP_OFFSET
            if (top >= TOP_OFFSET - BOT_OFFSET && top < sectionRect.height) {
                factor = 1 - top / sectionRect.height
            }

            const botTop = sectionRect.top + BOT_OFFSET
            if (botTop < 0 && botTop > -sectionRect.height) {
                factor = 1 - (-1 * botTop) / sectionRect.height
            }

            const color = interpolateColors('#ffffff', BG_COLOR, factor)

            document.body.style.backgroundColor = color
        }

        scrollHandlers.push({ cb: handler })
    }
}

const interpolateColors = (color1: string, color2: string, factor: number) => {
    if (factor < 0) factor = 0
    if (factor > 1) factor = 1

    const c1 = hexToRgb(color1)
    const c2 = hexToRgb(color2)

    const r = Math.round(c1.r + factor * (c2.r - c1.r))
    const g = Math.round(c1.g + factor * (c2.g - c1.g))
    const b = Math.round(c1.b + factor * (c2.b - c1.b))

    return rgbToHex(r, g, b)
}

const hexToRgb = (hex: string) => {
    hex = hex.replace(/^#/, '')
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return { r, g, b }
}

const rgbToHex = (r: number, g: number, b: number) => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}
