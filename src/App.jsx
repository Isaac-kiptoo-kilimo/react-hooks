import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function initialFunction(){
  console.log("This function is running");
  return 4
}
 function App(){

  const[count,setCount]=useState(()=>initialFunction());

  function decreamentCount(){
    setCount(prevCount=>prevCount-1)

  }

  function incrementCount(){
    setCount(prevCount=>prevCount+1)
  }
  return(
    <>
    <button onClick={decreamentCount}>-</button>
    <button>{count}</button>
    <button onClick={incrementCount}>+</button>
    </>
  )
 }

 export default App