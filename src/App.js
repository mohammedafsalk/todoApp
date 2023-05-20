import { useState,useEffect } from "react";
import "./style.css";

function App() {
  const [content,setContent] = useState("")
  const [values,setValues] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${content}`)
      .then(response => response.json())
      .then(json => setValues(json))
  },[content])


  return (
    <div>
      <div>
        <button onClick={()=> setContent("Posts")}>Posts</button>
        <button onClick={()=> setContent("Users")}>Users</button>
        <button onClick={()=> setContent("Comments")}>Comments</button>
      </div>
      <h1>{content}</h1>
      {values.map(item =>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;
