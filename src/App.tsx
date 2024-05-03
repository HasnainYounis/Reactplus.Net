import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import UseEffectExamples from './UseEffectExample';
import './App.css';
import Grandparent from './Grandparent';
import ValueContext from './ValueContext';

function App() {
  // it hide the and show the text ontick on checkbox
  const [hide, setHide]= useState(false);
  return (
   <>
   <input type="checkbox" onChange={()=>setHide(!hide)} />  
   {hide ? null: <UseEffectExamples />}
   
   <ValueContext.Provider value={hide}>
      <Grandparent />
      </ValueContext.Provider>
    </>
  )
}

export default App;
