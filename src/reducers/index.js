import { FLIP_STATE } from '../actions'

const live = (state = [], action) => {
    switch (action.type) {
      case FLIP_STATE:
        return { ...state, cells: state.cells.map((v, i) => { if(i === action.i) return !v; else return v; }) }
      default:
        return state
    }
  }
  
  export default live