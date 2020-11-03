export const FLIP_STATE = 'FLIP_STATE'
export const flipState = (i) => ({
    type: FLIP_STATE,
    i: i,
})

export const TIME_STEP = 'TIME_STEP'
export const timeStep = () => ({ type: TIME_STEP })