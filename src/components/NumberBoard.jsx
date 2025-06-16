import {useState} from "react";

export default function NumberBoard() {

    const [result, setResult] = useState("");
    const [expression, setExpression] = useState("");
    
    const numbersList=["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"]


     const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(expression).toString(); 
        setResult(evalResult);
      } catch(err) {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
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
        value={expression}
        readOnly
        />

        <div style={{width:"100%", textAlign:"center"}}>{result}</div>
        
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
