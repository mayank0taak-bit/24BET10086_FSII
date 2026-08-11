import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";

function App() {
  const user = {
    name: "Rajsi Rawat",
    email: "rajsi@gmail.com",
    program: "Web Development",
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    console.log(
      `Enrollment updated. Total courses: ${enrolledCount}`
    );
  }, [enrolledCount]);
  return (
    <UserContext.Provider value={user}>
      <div className="container">
        <h1>SKILLNEST - ONLINE LEARNING PLATFORM</h1>
        <Navbar
          user={user}
          enrolledCount={enrolledCount}
        />
        <Dashboard
          user={user}
          enrolledCount={enrolledCount}
          setEnrolledCount={setEnrolledCount}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;