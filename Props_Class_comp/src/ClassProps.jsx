import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    console.log(this.props);


    const {name , email} = this.props;
    
    return (
      <>


      //  i work with direct react props value
     <h1>Name :{name}</h1>
     <h1>Email :{email}</h1>
    {/* <h1>Email :{this.props.mail}</h1>  */}
      {/* //here i want to pass value using usesate hook */}
    
     
      </>
    )
  }
}
