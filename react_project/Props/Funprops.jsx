import React from 'react'

function Funprops(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <h1>{props?.obj?.name}</h1>
    </div>
  )
}

export default Funprops