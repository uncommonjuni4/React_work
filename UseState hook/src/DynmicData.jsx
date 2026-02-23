import React ,{useState }from 'react'

export default function DynmicData() {

    let [data,setdata] = useState(0)

let sum = ()=>{
    if(data >= 0){
      setdata(data + 1);
    } 
}

  return ( 
    <>
    <h1>Here i work with dynic data mean with number</h1>
    <h1>Data  : {data}</h1>
    <button onClick={sum}>Click to increase Value</button>
    </>
  )
}
