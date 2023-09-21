import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFirstname } from '../Numberslice/userslice';

export default function User() {
    const {firstname,lastname} = useSelector((state)=>state.userslice)
     const dispatch = useDispatch()
  return (
    <>
      <div className="contaner">
        <h1>user Info</h1>
        <h3>{firstname} {lastname }</h3>
        <button onClick={()=>dispatch(changeFirstname({firstname:"Rahul",lastname:"patel"}))}>change</button>
      </div>
    </>
  );
}
