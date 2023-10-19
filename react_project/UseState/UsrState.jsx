
//=============================================functional componet=====================//


import React, {useState} from 'react'

function UsrState() {

    const[count1,setCount] = useState(0);

    function countstate(){
        setCount(count1 + 1);
    }

    //  let x = 0;
    //  function count() {
    //    x++;
    //    console.log("x :", x);
    //  }

  return (
    <div>
      {/* <div onClick={() => count()}>please click here</div>
      <h1>{x}</h1> */}

      <div onClick={()=> countstate()}>please click here</div>
      <h1>{count1}</h1>
    </div>
  );
}

export default UsrState



//===========================================class componet ===============================//

// import React, { Component } from 'react';

// class UsrState extends Component {
//   constructor(){
//     super();
//     this.state = {
//       no : 0,
//       name : "my name",
//     };
//   }
//   clickme(){
//     this.setState({no:this.state.no+1});
//     this.setState({name : this.state.name + "nihar"});

//   }
//   render() {
//     return (
//       <div>
//           <h1>{this.state.no}</h1>
//           <h1>{this.state.name}</h1>
//           <button onClick={()=>this.clickme()}>click here</button>
//       </div>
//     );
//   }
// }

// export default UsrState;
