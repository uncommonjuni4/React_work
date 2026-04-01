import React   from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'


export default function App() {



  return (
    <>
 
  
  <Navbar title="TextUtils" about="About TextUtils" />
  <div className="container">
<Textform   heading ="Enter your text to analyize Review!"/>
  </div>
  
    </>
  )
}
