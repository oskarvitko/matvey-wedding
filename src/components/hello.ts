enum Variant {
    SINGLE = 's',
    COUPLE = 'c',
    FAMILY = 'f',
}

interface Data {
    dear: string
    you: string
    answer: string
}

const variants: Record<Variant, Data> = {
    [Variant.SINGLE]: {
        dear: 'Дорогой друг',
        you: 'тобой',
        answer: 'Буду',
    },
    [Variant.COUPLE]: {
        dear: 'Дорогие друзья',
        you: 'вами',
        answer: 'Будем',
    },
    [Variant.FAMILY]: {
        dear: 'Дорогие друзья',
        you: 'вашей семьёй',
        answer: 'Будем',
    },
}

export const initHello = () => {
    const dearPlace = document.querySelector('[data-hello-dear]')
    const youPlace = document.querySelector('[data-hello-you]')
    const answerPlaces = document.querySelectorAll('label[for^="willBe"]')

    const searchParams = new URLSearchParams(window.location.search)

    const variantKey = searchParams.get('v') ?? ''

    const variant = getVariant(variantKey)

    if (youPlace && dearPlace) {
        youPlace.textContent = variant.you
        dearPlace.textContent = variant.dear
    }

    answerPlaces.forEach((answerPlace) => {
        const span = answerPlace.querySelector('span')
        if (span) {
            span.textContent = variant.answer
        }
    })
}

const getVariant = (variant: string) => {
    const result = variants[variant as Variant]

    if (result === undefined) {
        return variants[Variant.SINGLE]
    }

    return result
}
