export const initPlanParalax = () => {
    const planContent = document.getElementById('plan-content')
    if (planContent) {
        planContent.addEventListener('mousemove', (e) => {
            const boundingBox = planContent.getBoundingClientRect()
            const elementCenterX = boundingBox.left + boundingBox.width / 2
            const elementCenterY = boundingBox.top + boundingBox.height / 2

            const angleX = (e.clientY - elementCenterY) * 0.025
            const angleY = (e.clientX - elementCenterX) * -0.025

            planContent.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
        })

        planContent.addEventListener('mouseleave', () => {
            planContent.style.transform = 'rotateX(0deg) rotateY(0deg)'
        })
    }
}
