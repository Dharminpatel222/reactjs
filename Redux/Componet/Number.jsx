import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Numberslice/numberslice';

export default function Number() {
  const number = useSelector((state)=>state.numberslice.number);

  const[numbervalue,setnumbervalue] = useState(0);

  const dispatch = useDispatch()
  return (
    <>
      <div className="contaner">
        <h1>Number:{number}</h1>
        <input type="text"
        placeholder='Enter the number that you want'
        value={numbervalue}
        className='mb-4 form-control'
        onChange={(e)=> setnumbervalue(e.target.value)} />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment(numbervalue))}
        >
          +
        </button>
        <button className="btn btn-danger" onClick={() => dispatch(decrement(numbervalue))}>
          -
        </button>
      </div>
    </>
  );
}
