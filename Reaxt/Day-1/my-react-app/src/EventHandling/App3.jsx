import React, { useState } from "react";

function App3 () {
    const {message , setmessage} = useState("")

    const handleclick= () =>{
        setmessage("Button was Clicked");
    }
    const handlecharge = (event)=>{
        setmessage(event.target.value);

    }
    return(
        <div>
        <h1>Event handlinmg example</h1>
        <input type="test" onChange={handlecharge} placeholder="Type Something Here Only"></input>
        <button onClick={handleclick}>Why Shoulde i Click u</button>
        <p>{message}</p>
        </div>
    )
}

export default App3;