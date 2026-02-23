


// import React, { Component } from 'react'

// export default class DymictextClass extends Component {


  

//        state ={
//             text:"Welcome JUN",
//             data:0
//         }

//         dymic = () => {
//        this.setState({
//         text: "Welcome Juni Bhi"
//           });

         
 
//     // know fore number 

    
//     }
//      dta =()=>{
//             this.setState({
//                 data:this.state.data +1
//             })
//           }
//   render() {
//     return (
//         <>
//         <div>{this.state.text}
      
//       <button  onClick={this.dymic}>Click</button>
//       </div>

//       <hr></hr>

//       <h1>Data :{this.state.data}</h1>
//       <button  onClick={this.dta}>Click</button>
//         </>
      
//     )
//   }
// }






import React, { Component } from 'react'

export default class DymictextClass extends Component {
    constructor(){
        super()

        this.state ={
            text:"juni"
        }
    }

    fun =()=>{
        this.setState({
            text:"Juni good"
        })
    }

  render() {
    return (
      <div>DymictextClassn {this.state.text}  <button  onClick={this.fun}>click</button></div>
    )
  }
}
