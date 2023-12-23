import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    
    const [subject,setSubject] = useState('');
    const [hour, setHour] = useState(0);
    const [planner, setPlanner]=useState([]);

    const addPlanner =()=>{
      setPlanner([...planner, {subjectInput:subject, hourInput:hour}])
    }

    const incrementHour = (index) => {
      setPlanner((prevPlanner) => {
        const updatedPlanner = [...prevPlanner];
        console.log(updatedPlanner)
      })
    };

    
  return (

    <>
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    
    marginTop: "35vh",
    flexDirection: "column",
    marginLeft:'40%'
  }}
>
  <p style={{ fontSize: "x-large" }}>Geekster Education Planner</p>
  <div style={{ display: "flex", gap: 5, height: "4vh" }}>
    <input
      type="text"
      placeholder="Subject"
      style={{ border: "1.5px solid #e5e7eb", borderRadius: 4, width: 200 }}
      onChange={(e)=>setSubject(e.target.value)}
      value={subject}
    />
    <input
      type="number"
      placeholder="Hours"
      style={{ border: "1.5px solid #e5e7eb", borderRadius: 4, width: 45 }}
      onChange={(e)=>setHour(e.target.value)}
      value={hour}

    />
    <button
      style={{
        backgroundColor: "#3B82F6",
        color: "white",
        border: "none",
        borderRadius: 6,
        padding: "0 10px"
      }}
      onClick={addPlanner}
    >
      Add
    </button>
  </div>
  <div style={{}}>
{
    planner.map((ele,index)=>(
      <div style={{marginTop:'10px'}}>
      {ele.subjectInput} - {ele.hourInput} hours 
      <button onClick={()=>incrementHour(index)} style={{borderRadius:'4px', marginLeft:'10px', padding:'6px 8px', backgroundColor:'#22C55E',border:'none',color:'white'}}>+</button>
      <button style={{borderRadius:'4px', marginLeft:'10px', padding:'6px 8px', backgroundColor:'#EF4444',border:'none',color:'white'}}>-</button>
      </div>
      ))
}
</div>
</div>


</>

  );
}

export default App;
