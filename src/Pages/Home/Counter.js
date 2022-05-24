import { React, useState } from 'react'
 
const Counter = () =>  {
  const [counter, setCounter] = useState(0);
 
  const increase = () => {
    setCounter(count => parseInt(count) + 1);
  };
  const decrease = () => {
    setCounter(count => count - 1);
  };
  const changeValue =(e)=>{
  setCounter(e.target.value);
 }
  return (
    <div className="counter">
      <h1>React Counter</h1>
      
      <div className="btn__container">
        <input onChange={changeValue} value={counter} type="text" />
        <button className=" btn-primary mr-5" onClick={increase}>+++</button>
        <button className=" btn-primary" onClick={decrease}>---</button>
      </div>
    </div>
  );
}
export default Counter;