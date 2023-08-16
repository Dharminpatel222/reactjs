import { useState } from 'react'
import './App.css'

import Classcom from "../Classcomponet/Classcom.jsx";
import Side_main from "../Classcomponet/Side_main.jsx";
import Footer from "../Classcomponet/Footer.jsx";
import Headerfuncomp from "../Functionalcomponet/Headerfuncomp.jsx";
import Side_mainfun from "../Functionalcomponet/Side_mainfun.jsx";
import Footerfun from "../Functionalcomponet/Footerfun.jsx";
import UsrState from "../UseState/UsrState.jsx";
import Stateproject from "../UseState/Stateproject.jsx";
import Stateproject2 from "../UseState/Stateproject2.jsx";
import Funprops from "../Props/Funprops.jsx";
import Funprops2 from "../Props/Funprops2.jsx";
import Classprops from "../Props/Classprops.jsx";
import Distructuringprops from "../Props/Distructuringprops.jsx";
import Fragment from "../ConditionalRen-map-fragment/Fragment.jsx";
import ConditionalRen from "../ConditionalRen-map-fragment/ConditionalRen.jsx";
import MapKey from "../ConditionalRen-map-fragment/MapKey.jsx";
import Task from "../ConditionalRen-map-fragment/Task.jsx";
import BasicExample from '../CardProject/Bootstrap';
import MapCom from '../CardProject/MapCom';
import InputCom from '../Inputproject/InputCom';
import Delete from '../Inputproject/Delete';
import Update from '../Inputproject/Update';
import Multipleinput from '../Inputproject/Multipleinput';
import BikeMultiinput from '../Inputproject/BikeMultiinput';
import Usecontext from '../UseContext/Usecontext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Classcom/>
    <Side_main />       
    <Footer  /> */}

      {/* ============================================= */}

      {/* <Headerfuncomp  />
      <Side_mainfun />     
      <Footerfun /> */}

      {/* //=================================================// */}

      {/* <UsrState /> */}

      {/* //=====================================================// */}

      {/* <Stateproject /> */}

      {/* //========================================================// */}

      {/* <Stateproject2 /> */}

      {/* //=========================================================// */}
      {/* 
    <Funprops title = {"Dharmin"} />
      <Funprops obj = {{
        name : "Nihar",
        age : 23
      }} /> */}

      {/* //==================================================================//   */}

      {/* <Funprops2 name = {"Dharmin"}/> */}

      {/* //================================================// */}

      {/* <Classprops name = {"Dharmin"} /> // classprops //  */}

      {/* //================================================// */}

      {/* <Distructuringprops name = {"Dharmin"} age ={23}/> */}

      {/* //================================================// */}

      {/* <Fragment /> */}

      {/* //================================================// */}

      {/* <ConditionalRen isMale = {false} />  */}

      {/* //================================================// */}

      {/* <MapKey /> */}

      {/* //================================================// */}

      {/* <Task inputType={"password"} /> */}

      {/* //================================================// */}

      {/* <MapCom /> */}

      {/* //================================================// */}

      {/* <BasicExample /> */}

      {/* //================================================// */}

      {/* <InputCom /> */}

      {/* //================================================// */}

      {/* <Delete />   */}

      {/* //================================================// */}

      {/* <Update /> */}

      {/* //================================================// */}

      {/* <Multipleinput /> */}

      {/* //================================================// */}

      {/* <BikeMultiinput /> */}

      {/* //================================================// */}

      <Usecontext />
    </>
  );
}

export default App
