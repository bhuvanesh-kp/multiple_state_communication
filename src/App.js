//import '/App.css';
import {useState} from 'react';


export default function App(){
  const [inc,setInc] = useState(1);
  const [val,setVal] = useState(1);

  return (
    <div>
      <Scroll inc={inc} setInc={setInc}/>
      <Manual inc={inc} val={val} setVal={setVal}/>
      <Result val={val}/>
    </div>
  );
}

function Scroll({inc,setInc}){
  
  
  return(
    <div>
      <label>Incrementer</label>
      <input type="number" onChange={(e)=>setInc(e.target.value)} defaultValue={1}/>
      {inc}
    </div>
  );
}

function Manual({inc,val,setVal}){
  return(
    <div>
      <label>units to incr</label>
      <button type="number" onClick={(e)=>setVal((c)=> Number(c) + Number(inc))}>click here {val}</button>

      <label>units to desc</label>
      <button type="number" onClick={(e)=>setVal((c)=> Number(c) - Number(inc))}>click here {val}</button>
    </div>
  );
}

function Result({val}){
  const date = new Date();
  date.setDate(date.getDate() + val);
  return (
    <div>
      {`${date}`}
    </div>
  );
}