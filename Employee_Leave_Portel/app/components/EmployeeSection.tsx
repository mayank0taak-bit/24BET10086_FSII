import { Employee } from "../types/Employee";
import LeaveForm from "./LeaveForm";

type EmployeeSectionProps = {
    employee : Employee
}

export default function EmployeeSection({
    employee
}: EmployeeSectionProps) {
    return (
    <div>
        <h2 className="text-xl font-semibold mb-4">
            Leave Request
        </h2>

        <LeaveForm employee={employee} />
    </div>
    )
}