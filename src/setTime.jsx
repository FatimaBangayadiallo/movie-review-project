import React, {useState} from 'react';

const Time = () =>{
  const  [name, setName] = useState('fatima');
  
   function MyFunction(){
     setTimeout(() =>{console.log('first');},1000)
     console.log('second');
   }
  return(
    <>
    <h1>hi click me</h1>
    <button onClick= {MyFunction}></button>
    </>
  );
}
export default Time;
