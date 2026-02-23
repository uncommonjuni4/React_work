import React ,{useState} from "react";

function Dynmictext(){

    let [text,setText] = useState("Welocme juni Bhi ")
    
   let textdynmic =()=>{
    setText("Welome Juni  to Chnage Dynmic text1")
   }
   let textdynmic2 =()=>{
    setText("Welome Juni  to Chnage Dynmic text2")
   }
  console.log("render=---");
  

    return(
        <>
         <h1>
            Here I work to chnage my Text Dynmicially
         </h1>
         <h3>{text}</h3>
         <button  onClick={textdynmic}>Click me to see Dynmic Text1</button>
         <button  onClick={textdynmic2}>Click me to see Dynmic Text2</button>
        <hr></hr>
        </>
    )
}

export default Dynmictext;