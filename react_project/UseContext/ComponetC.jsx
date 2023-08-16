import React from 'react'
import { useContext } from 'react'
import { wrappercontext } from './Usecontext'

export default function ComponetC() {
     const mydata = useContext(wrappercontext);
  console.log(mydata);

     const {username} = mydata;

  return (
 <>
 <div className="container">
    <h1>hello,{username}</h1>
 </div>
 </>
  )
}
