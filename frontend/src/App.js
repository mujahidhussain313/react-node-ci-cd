import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [username, setUsername] = useState("");

  useEffect(()=>{
   getNames();
  },[]);

  const getNames = async () =>{
     const resp = await axios.get('/name');
     console.log(resp);
     setUsername(resp.data);
  }

  return (
    <div className="App">
      <h1>Hello Frontend</h1>
      <h1>Hello, My name is {username}</h1>
    </div>
  );
}

export default App;
