import { initPlanBG } from './plan-bg'
import { initPlanItemPosition } from './plan-item-position'
import { initPlanParalax } from './plan-paralax'
import { initPlanStripes } from './plan-stripe'

export const initPlan = () => {
    initPlanStripes()
    initPlanParalax()
    initPlanBG()
    initPlanItemPosition()
}
