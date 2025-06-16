import {useState} from "react";

export default function NumberBoard() {

    const [result, setResult] = useState("");
    
    const numbersList=["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"]


    const handleClick = (value) => {
    if (value === "C") {
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(result).toString()); 
      } catch (err) {
        setResult("Error");
      }
    } else {
      setResult(result + value);
    }
  };
  return (
    <div style={{display:"flex",justifyContent:"center", alignItems:"center" }}>
        
        <div style={{display:"flex",
            gap:"8px",
            flexWrap:"wrap",
            padding:"50px",
            height:"200px",
            width:"250px"
        }}>
        
        <h1>React Calculator</h1>
        <input type="text" 
        style={{width:"230px"}}
        value={result}
        />
        
        {numbersList.map(n => (
        <button style={{border: "1px solid grey",
          borderRadius:"10%",
          height : "50px",
          width : "50px",
          display:"flex",
          flexDirection: "column",
          alignItems:"center",
          textAlign:"center",
          padding:"1px",
          justifyContent:"center"}}
          key={n}
          onClick={() => handleClick(n)}
          >
            
            <p>{n}</p>                   
            </button>
      ))}
      </div>
    
    </div>
  );
}
