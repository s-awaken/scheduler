import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode,replace = false){

    setMode(mode);
    replace ? setHistory(prev => [...prev.slice(0, -1), mode]) : setHistory(prev => [...prev, mode]);
  }




  function back(){ 
    if(history.length === 1){
      return;
    }
    
    let newArray = history.slice(0,history.length-1);
    let backMode = newArray[newArray.length-1];
    setHistory(newArray)
    setMode(backMode);
    

  }
  return { mode,transition,back };
}
