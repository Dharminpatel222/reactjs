import React from 'react'

export default function PrivateRoute({children}) {
  return (
    <>
    <div  style={{background:"black",color:"white"}} className="p-5">{children}</div>
    </>
  )
}
