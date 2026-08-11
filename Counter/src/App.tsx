import { useState } from "react";
import "./App.css";

function App() {

  const [bgColor, setbgColor] = useState<string>("bg-white");

  return (
    <div className={`h-screen flex items-center justify-center 
      gap-4 transition-colors duration-300 ${bgColor}`}>
        <button
          onClick={() => setbgColor("bg-red-500")}
          className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
        >
          Red
        </button>

        <button
          onClick={() => setbgColor("bg-blue-500")}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          Blue
        </button>

        <button
          onClick={() => setbgColor("bg-green-500")}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer"
        >
          Green
        </button>
    </div>
  )

  // const [time, setTime] = useState<number>(0);
  // const [isRunning, setIsRunning] = useState<boolean>(false);

  // useEffect(() => {
  //   let interval: ReturnType<typeof setInterval>;

  //   if (isRunning) {
  //     interval = setInterval(() => {
  //       setTime((prev) => prev + 10); // Increase by 10 ms every 10 ms
  //     }, 10);
  //   }

  //   return () => {
  //     if (interval !== undefined) {
  //       clearInterval(interval);
  //     }
  //   };
  // }, [isRunning]);

  // const startWatch = () => {
  //   setIsRunning(true);
  // };

  // const stopWatch = () => {
  //   setIsRunning(false);
  // };

  // const resetWatch = () => {
  //   setIsRunning(false);
  //   setTime(0);
  // };

  // const format = (time: number): string => {
  //   const hours = Math.floor(time / 3600000);
  //   const minutes = Math.floor((time % 3600000) / 60000);
  //   const seconds = Math.floor((time % 60000) / 1000);
  //   const milliseconds = Math.floor((time % 1000) / 10); // 00-99

  //   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
  //     2,
  //     "0"
  //   )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
  //     2,
  //     "0"
  //   )}`;
  // };

  // return (
  //   <div
  //     style={{
  //       textAlign: "center",
  //       marginTop: "100px",
  //       fontFamily: "Arial",
  //     }}
  //   >
  //     <h1>Stopwatch</h1>

  //     <h2>{format(time)}</h2>

  //     <button onClick={startWatch}>Start</button>

  //     <button onClick={stopWatch} style={{ marginLeft: "10px" }}>
  //       Stop
  //     </button>

  //     <button onClick={resetWatch} style={{ marginLeft: "10px" }}>
  //       Reset
  //     </button>
  //   </div>
  // );
}

export default App;