import { useMemo } from "react";
import { useState } from "react";

function UseMemoExample() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const expensiveCalc = useMemo(()=>{
    console.log("rendered");
    let res = 0;
    for(let i =0; i<500; i++){
      res += i
    }
    return res;
  },[counter1])

  return (
    <>
      <button onClick={() => {
        setCounter1(prev => prev + 1)
      }}>Counter 1</button>
      <button onClick={() => {
        setCounter2(prev => prev + 1)
      }}>Counter 2</button>
      {expensiveCalc}
      <p>Conters {counter1} and {counter2}</p>
    </>
  );
}

export default UseMemoExample;
