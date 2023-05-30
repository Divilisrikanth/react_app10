import React, {useState} from 'react';
import './App.css';

function App() {
   const [data,setData] = useState(null)
   const [print,setPrint]= useState(false)
  function getData(val)
   {
    setData(val.target.value)
    console.warn(val.target.value)
   }
  
  return (
    <div className="App">
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <input type="text" onChange={getData} />
      <button onClick={()=>setPrint(true)} >Print Value</button>
    </div>
  );
}

export default App;
