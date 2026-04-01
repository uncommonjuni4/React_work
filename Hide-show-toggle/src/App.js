import React, { useState } from 'react'

import './App.css'

export default function App() {


  const [status ,setstatus] =useState(true);
  return (
    <>
    
    <div   className='App'>
      <h1>Hide,show And Toggle</h1>
      <br></br>
      {status?<h1 className='box'></h1>:''}
      <button  onClick={()=>setstatus(false)}>hide </button>
      <button  onClick={()=>setstatus(true)}>Show</button>
      <button  onClick={()=>setstatus(!status)}>Toggle</button>
    </div>
    </>
  )
}
