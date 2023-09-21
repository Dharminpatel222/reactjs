import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from "../Numberslice/apislice";

export default function Api() {
    const dispatch = useDispatch();

    const { isloading,products } = useSelector((state)=>state.api)

    useEffect(() => {
        dispatch(getproduct())
    }, []);

    
    if(isloading){
        return <h1>Loading...</h1>
    }
  return (
    <>
    <div className="container">
        <h1>hello</h1>
        {
            products.map((item)=>{
                 const {title,id} = item;
                 return(
                    <h1 key={id}>{title}</h1>
                 )
            })
        }
    </div>
    </>
  )
}
