import { Employee } from "../types/Employee";
import EmployeeSection from "./EmployeeSection";

type DashboardProps = {
  employee: Employee;
};

export default function Dashboard({ employee }: DashboardProps) {
  return (
    <div className="bg-amber-600 rounded-lg p-8 w-[500px]">
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>

      <EmployeeSection employee={employee} />
    </div>
  );
}
