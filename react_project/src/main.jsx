import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UsrState from "../../UseState/UsrState.jsx";
import Stateproject from "../../UseState/Stateproject.jsx";
import Stateproject2 from "../../UseState/Stateproject2.jsx";
import Funprops from "../../Props/Funprops.jsx";
import Funprops2 from "../../Props/Funprops2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Classcom />
    <Side_main />       // used classcomponet //
    <Footer/> */}

    {/* ============================================= */}

    {/* {/* <Headerfuncomp />
      <Side_mainfun />     // used functonal componet //
      <Footerfun /> */}

    {/* //=================================================// */}

    {/* <UsrState /> */}

      {/* //=====================================================// */}

    {/* <Stateproject /> */}

      {/* //========================================================// */}

      {/* <Stateproject2 /> */}

      {/* //=========================================================// */}

      {/* <Funprops title = {"Dharmin"} />
      <Funprops obj = {{
        name : "Nihar",
        age : 23
      }} /> */}

      {/* //==================================================================//   */}

      <Funprops2 name = {"Dharmin"}/>

      {/* //================================================// */}

      

  </React.StrictMode>
);
