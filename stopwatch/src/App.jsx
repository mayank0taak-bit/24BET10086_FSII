import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const start = () => {
    if(timeRef.current !== null) return;
    timeRef.current= setInterval(()=>{
      setTime((prev) => prev + 10);
    }, 10);
  };
  
  const stop = () => {
    clearInterval(timeRef.current);
    timeRef.current=null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const hrs= Math.floor(time/3600000);
  const mins= Math.floor((time%3600000)/60000);
  const sec= Math.floor((time%60000)/1000);
  const ms= Math.floor((time%1000)/10);

  return (
    <div className="stopwatch-card">
      <div className="time-display">
        {String(hrs).padStart(2,"0")}:
        {String(mins).padStart(2,"0")}:
        {String(sec).padStart(2,"0")}:
        {String(ms).padStart(2,"0")}
      </div>
      <div className="button-group">
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

export default App
