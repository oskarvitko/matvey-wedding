import { scrollHandlers } from '../scroll'

const OFFSET = 200

export const initPlanItemPosition = () => {
    const items = document.querySelectorAll<HTMLDivElement>('.plan__item')
    const section = document.getElementById('section-plan')

    if (section) {
        items.forEach((item) => {
            const getFactor = getFactorFunction(item, OFFSET, 1.2)

            const handler = () => {
                const factor = 1 - getFactor()

                const currentOffset = factor * OFFSET

                item.style.transform = `translateY(${
                    currentOffset > 0 ? currentOffset : 0
                }px)`
            }

            scrollHandlers.push({ cb: handler, section })
        })
    }
}

export const getFactorFunction = (
    element: Element,
    offset: number,
    heightOffset: number = 1,
) => {
    const elementRect = element.getBoundingClientRect()
    const initialTopOffset =
        elementRect.top -
        window.innerHeight +
        window.scrollY -
        elementRect.height * heightOffset

    return () => {
        if (window.scrollY >= initialTopOffset) {
            const result = (window.scrollY - initialTopOffset) / offset
            // return result > 1 ? 1 : result
            return result
        }

        return 0
    }
}
