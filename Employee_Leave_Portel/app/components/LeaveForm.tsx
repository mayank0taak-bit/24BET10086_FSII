import { Employee } from "../types/Employee";

interface LeaveFormProps {
  employee: Employee;
}

export default function LeaveForm({
  employee,
}: LeaveFormProps) {
  return (
    <div className="border rounded-lg p-5 bg-cyan-300">
      <p>
        <strong>Employee Name:</strong>
        {" " + employee.name}
      </p>

      <p>
        <strong>Department:</strong>
        {" " + employee.department}
      </p>

      <p>
        <strong>Available Leave Balance:</strong>
        {" " + employee.employeeLeftLeaves} days
      </p>
    </div>
  );
}