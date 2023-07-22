import React from "react";

export default function ConditionalRen(props) {
  if ( props.isMale){
    return (
      <>
      <h1>yes,he is a boy</h1>
      </>
    )
  }else{
    return(
      <>
      <h1>yes,she is a girl</h1>
      </>
    )
  }
}
