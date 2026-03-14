import React, { Component } from 'react'
import ClassProps from './ClassProps'

export default class App extends Component {

  constructor(){
    super();
    this.state ={
      name :"Muhammad junaid Hassan",
      email:"chjunaidhassan95@gmail.com"
    }
  }
  render() {
    return (
      <>
      <h1>Here I work work with props in Class compenents</h1>

      {/* //without hook */}
      {/* <ClassProps    name={"Muhammad junaid Hassan"}   mail={"chjunaidhassan95@gmail.com"}/> */}
       

      {/* // with usestate hook */}
      
      <ClassProps   name ={this.state.name} email={this.state.email}/>

      
     {/* //want to change data dynmially */}
    
    <button  onClick={()=> this.setState({name:"Juni"})}>Click me to change see</button>
    <button  onClick={()=> this.setState({email:"Null"})}>Click me to change see</button>


      </>
    )
  }
}
