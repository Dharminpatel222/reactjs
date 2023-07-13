import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Classcom from '../Classcomponet/Classcom.jsx'
import Side_main from '../Classcomponet/Side_main.jsx'
import Footer from '../Classcomponet/Footer.jsx'

import Headerfuncomp from '../Functionalcomponet/Headerfuncomp.jsx'
import Side_mainfun from '../Functionalcomponet/Side_mainfun.jsx'
import Footerfun from '../Functionalcomponet/Footerfun.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Classcom />
    <Side_main />       // used classcomponet //
    <Footer/> */}
    <Headerfuncomp/>
    <Side_mainfun/>
    <Footerfun/>
  </React.StrictMode>
);
