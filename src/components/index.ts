import { initCircleText } from './circle-text'
import { initComfort } from './comfort'
import { initForm } from './form'
import { initInteractive } from './interactive'
import { initMainBg } from './main-bg'
import { initPlace } from './place'
import { initPlan } from './plan/plan'
import { initScroll } from './scroll'

export const initComponents = () => {
    initMainBg()
    initCircleText()
    initPlace()
    initPlan()
    initComfort()
    initInteractive()
    initForm()

    initScroll()
}
