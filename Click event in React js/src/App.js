import logo from './logo.svg';
import './App.css';

 

  function App() {


    let Fun  = ()=>{
      prompt("He JUni")
    }
  
  return (
    <div className="App">
      
      <h1>hi</h1>
      <button onClick={()=> alert("welcome Juni Bhi")}>Click ME</button>
      <button onClick={Fun}>Click Me 2</button>
    </div>
  )
}

export default App;
