import React, { createContext, useState } from 'react'
import ComponetA from './ComponetA';

export const wrappercontext = createContext();

export default function Usecontext() {

    const[username,setusername] = useState("dharmin");
    const [product,setproduct] = useState([1,2,3,4,5])

  return (
    <>
    <div className="container">
        <wrappercontext.Provider value={{username,product,setproduct}}>
            <ComponetA />
        </wrappercontext.Provider>
    </div>
    </>
  )
}
