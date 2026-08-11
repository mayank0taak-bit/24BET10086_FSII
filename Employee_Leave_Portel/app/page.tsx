import Dashboard from "./components/Dashboard";
import { Employee } from "./types/Employee";

export default function Home() {
  const employee: Employee = {
    id: 1,
    name: "Rajsi Rawat",
    department: "Engineering",
    employeeLeftLeaves: 10
  };

  return (
    <main className="min-h-screen bg-blue-300 flex justify-center items-center">
      <Dashboard employee={employee} />
    </main>
  );
}