import CircleType from 'circletype'

export const initCircleText = () => {
    const words =
        document.querySelectorAll<HTMLParagraphElement>('[data-angle]')
    words.forEach((word) => {
        new CircleType(word).radius(Number(word.getAttribute('data-angle')))
    })
}
