import { useEffect, useRef, useState } from "react";

function MutableRef() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number|null>(null)

    const stopTimer = () => {
        if(intervalRef.current)
        window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
      intervalRef.current = window.setInterval(() => {
          setTimer((sec) => sec + 1) //new value per second, different with setTimer(timer+1)
      }, 1000);

    //   return () => { 
    //     stopTimer();
    //   }; //i ddont know what is it for
    
    }, []);

  return (
  <div>
      Timer Result = {timer}
      <button onClick={() => stopTimer()} >Stop Timer</button>
  </div>);
}

export default MutableRef;
