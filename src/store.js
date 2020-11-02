import { createStore } from 'redux'
import rootReducer from './reducers'

const Width = 3;
const Height = 7;

const store = createStore(rootReducer, {
    width: Width,
    height: Height,
    cells: Array(Width*Height).fill(0).map((v, i) => i%2),
})
export default store
