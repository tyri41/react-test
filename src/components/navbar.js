import { connect, useDispatch } from 'react-redux'
import '../App.css'
import { TIME_STEP } from '../actions'

const Navbar = () => {
    const dispatch = useDispatch();
    const onTime = () => {
        dispatch({ type: TIME_STEP });
    }
    return (
    <div className='navbar'>
        <button style={{ margin: 10 + 'px' }} onClick={onTime}>move time</button>
    </div>
)}

export default connect()(Navbar)