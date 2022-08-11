
import React from "react"
import {useDispatch, useSelector } from "react-redux"
import {selectName,editName} from "./features/currentUSer/currentUserSlice"

function App() {

const name = useSelector(selectName)

  const dispatch = useDispatch()

  return (
  
    
    <div>
     <h1>{name}</h1>
     <input type = "text" value={name}
      onChange={(evt)=>{dispatch(editName(evt.target.value))}}/>
    </div>
    
  );
}

export default App;
