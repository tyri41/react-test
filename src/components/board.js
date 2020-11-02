import '../App.css'
import { connect } from 'react-redux';
import Cell from './cell'

const mapStateToBoard = (state) => {
  return { width: state.width, height: state.height }
}

const Board = (props) => {
  console.log(props);
  const arr = Array(props.width * props.height).fill(0);
  return (
    <div className='board' style={{width: props.width*35 + 'px', height: props.height*35 + 'px'}}>
        {arr.map((v, i) => (
          <Cell key={i} id={i}/>
        ))}
    </div>
)}

export default connect(mapStateToBoard)(Board)