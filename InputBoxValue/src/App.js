// import React, { useState } from 'react'

import  './App.css'

// export default function App() {

//   let [inputvalue,serinpuvale] = useState('');  /// here i use statee to set value

//   let [submitvalue,setsubmitvalue] =useState(false);
//    let handlechange =(event)=>{
//     console.log(event.target.value);
//     serinpuvale(event.target.value)   
//     setsubmitvalue(false) 
//    }
//   return (
//     <>
//       <div className='App'>
//         <h1>Functioal Component</h1>
//         <p>Here i want to get input  box  value in React Js </p>
//         <br></br>
//         <br></br>
//         <h1>{submitvalue ? inputvalue:'' } </h1>
//         <input onChange={handlechange} ></input>
//         <button onClick={()=> setsubmitvalue(true)}>Submit</button>
//       </div>
//     </>
//   )
// }




import React, { useState } from 'react'

export default function App() {


  const [value ,setvalue] =useState("");

  const [submit,setsubmit]  = useState(false);


  const handlechange=(event)=>{
     console.log(event.target.value);
     setvalue(event.target.value);
     setsubmit(false);
  }
  return (
    <>
      <div  className='App'>

        <h1>Here I work For React Input box value</h1>
        <br></br>
        <br></br>
       <h1>{submit?value: ""}</h1>
        <input  onChange={handlechange}></input>
        <button   onClick={()=> setsubmit(true)}>Submit</button>

      </div>
    </>
  )
}

