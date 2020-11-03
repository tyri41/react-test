import { FLIP_STATE, TIME_STEP } from '../actions'

const live = (state = [], action) => {
    switch (action.type) {
      case FLIP_STATE:
        return { ...state, cells: state.cells.map((v, i) => { if(i === action.i) return !v; else return v; }) }
      case TIME_STEP:
        return { ...state, cells: state.cells.map((v, i) => state.cells[(i+1)%(state.width*state.height)] ) }
      default:
        return state
    }
  }
  
  export default live