import logo from '../logo.svg';
import '../App.css'
import { connect, useDispatch } from 'react-redux';
import { FLIP_STATE } from '../actions'

const Cell = (props) => {
    const dispatch = useDispatch();
    const onFlip = () => {
        dispatch({ type: FLIP_STATE, i: props.id });
    }
    let fill = null;
    if(props.state) fill = (<img src={logo} className="App-logo" alt="logo" />);
    return (
    <div className='square' onClick={ onFlip }>
        {fill}
    </div>
)};

const mapStateToCell = (state, ownProps) => {
    return { state: state.cells[ownProps.id] }
}

export default connect(mapStateToCell)(Cell)
