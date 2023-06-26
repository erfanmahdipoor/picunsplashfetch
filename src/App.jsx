import { useState } from "react";

function App() {
  const [value , setValue] =useState("")
  cosnt [result, setResult]=useState("")
  console.log(result);
  const fetchImage=()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=code&query=${value}`).then(res=>res.json()).then(data=>{setResult(data.results)})
  }
  return (
    <div>
      <div className="header">
        <span>search</span>
        <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={fetchImage}>send</button>
      </div>
      <div className="galllery">
        {result && result.map((item)=>{return <img  key={item.id} src={item.urls.regular}/>})}
      </div>
    </div>
  );
}

export default App;
