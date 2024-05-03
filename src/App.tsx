import React, { useState } from 'react';
import logo from './logo.svg';
import UseEffectExamples from './UseEffectExample';
import './App.css';

function App() {
  const [hide, setHide]= useState(false);
  return (
   <>
   <input type="checkbox" onChange={()=>setHide(!hide)} />  
   {hide ? null: <UseEffectExamples />}
    
    </>
  )
}

export default App;
