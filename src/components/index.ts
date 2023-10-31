import { initCircleText } from './circle-text'
import { initComfort } from './comfort'
import { initForm } from './form'
import { initHello } from './hello'
import { initInteractive } from './interactive'
import { initMainBg } from './main-bg'
import { initPlace } from './place'
import { initScroll } from './scroll'

export const initComponents = () => {
    initMainBg()
    initCircleText()
    initPlace()
    initInteractive()
    initForm()
    initComfort()
    initHello()

    initScroll()
}
