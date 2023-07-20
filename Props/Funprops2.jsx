
// useState used //

import React, {useState} from 'react'

function Funprops2(props) {
    const[changename,setchangename] = useState(props.name);

    function changenamefun(){
        let uppercasename = changename.toUpperCase();
        setchangename(uppercasename);
    }
  return (
    <div>
        <h1>{changename}</h1>
        {/* <h1>{props.name}</h1> */}
        <button onClick={()=>changenamefun()}>change name</button>
    </div>
  )
}

export default Funprops2