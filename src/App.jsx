import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



 function App(){

  const[count,setCount]=useState(4);
  const[theme,setTheme]=useState("blue");
  const [items,setItems]=useState([])
  const[resourceType, setResourceType]=useState('posts')

  function decreamentCount(){
   setCount(prevCount=>prevCount-1)
   setTheme("green")
  }

  function incrementCount(){
   setCount(prevCount=>prevCount+1)
   setTheme("red")
  }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
        .then(json =>setItems(json))

  },[resourceType])
  return(
    <>
    <div className="count">
    <button onClick={decreamentCount}>-</button>
    <button>{count}</button>
    <button>{theme}</button>
    <button onClick={incrementCount}>+</button>
    </div>

    <div className="comments">
    <button onClick={()=>setResourceType('posts')}>Posts</button>
    <button onClick={()=>setResourceType('users')}>users</button>
    <button onClick={()=>setResourceType('comments')}>Comments</button>
    <h4>{resourceType}</h4>
    {items.map(item=>{
      return <pre>{JSON.stringify(item)}</pre>
    })}
    </div>

    </>
  )
 }

 export default App