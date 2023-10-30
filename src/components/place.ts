export const initPlace = () => {
    const link = document.getElementById('addr-link')
    const place = document.getElementById('addr-place')
    if (link && place) {
        const addHandler = () => place.classList.add('hovered')
        const removeHandler = () => place.classList.remove('hovered')

        link.addEventListener('mouseover', addHandler)
        link.addEventListener('mouseout', removeHandler)
    }
}
