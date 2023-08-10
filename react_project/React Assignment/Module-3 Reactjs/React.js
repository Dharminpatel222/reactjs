//  What is React Js?

// Ans=> React is a JavaScript library created by Facebook

// React is a User Interface (UI) library

// React is a tool for building UI components

// What is NPM in React Js?

// Ans=> NPM is short for node package manager, an online directory that contains the various already registered open-source packages

//  What is Role of Node Js in react Js? 

// Ans=> NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application.

//  What is CLI command In React Js? \

// Ans=>
// Command Line Interface
// Command Line Interpreter
// Command Line Input

// CLI is a command line program that accepts text input to execute operating system functions.

// In the 1960s, using only computer terminals, this was the only way to interact with computers.

// In the 1970s an 1980s, command line input was commonly used by Unix systems and PC systems like MS-DOS and Apple DOS.

// Today, with graphical user interfaces (GUI), most users never use command-line interfaces (CLI).

// However, CLI is still used by software developers and system administrators to configure computers, install software, and access features that are not available in the graphical interface.

// What is Components in React Js?

// ANS=>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

//  What is Header and Content Components in React Js? 

// Ans=>46 headers are developed with React. A header is a section at the top of a page that displays site name and navigation. React is the most popular frontend library for developing component-driven user interfaces.

// Step 1: Install Node.js installer for windows. Click on this link. Here install the LTS version (the one present on the left). Once downloaded open NodeJS without disturbing other settings, click on the Next button until it’s completely installed.

// Step 2: Open command prompt  to check whether it is completely installed or not type the command –> 

// node -v

// Step 3: Now in the terminal run the below command: 

// npm create vite@latest-->enter-->project name-->start_learn--->react--->Javascript--->cd_strat_lern_react-->enter-->npm install-->npm run dev  


//  How to check version of React Js? 

// ANS=> To check which React version is your project using you need to open the package. json. Take a look under the dependencies section. It should list all of the dependencies of your project and one of those should be React.

//  How to change in components of React Js? 

// Ans=> We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState

//  Create Increment decrement state change by button click? 

import React, { useEffect, useState } from 'react'

export default function Useeffect() {

  const [number, setnumber] = useState(0);
  const [IsShowing, setIsShowing] = useState(false);

  useEffect(()=>{
    console.log("Componet mounted");
  },[IsShowing]);

  function Changenumber(){
    setnumber(number + 1)
  } 
    function Changenumber1() {
      setnumber(number - 1);
    } 
    function set(){
      setIsShowing(!IsShowing)
    }
  return (
    <>
    <div className="container">
        <h2>Learing Effect</h2>
        <div className="card">
          <div className="card-body">
            <h1>{number}</h1>
            <button onClick={()=>Changenumber()}>+</button>
            <button onClick={()=>Changenumber1()}>-</button>
          </div>
          <button onClick={()=>set()}>Hide/show</button>
          {
            IsShowing ? <h2>hello i am showing </h2> : null
          }
        </div>
    </div>
    </>
  )
}

