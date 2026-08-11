import { useState } from "react";
import StudentProfileProps from "./StudentProfileProps";
import StudentProfileContext from "./StudentProfileContext";

function CourseList({
  user,
  enrolledCount,
  setEnrolledCount,
}) {
  const courses = [
    {
      id: 1,
      name: "React Basics",
      price: 999,
    },
    {
      id: 2,
      name: "Node.js Essentials",
      price: 1199,
    },
    {
      id: 3,
      name: "UI/UX Design",
      price: 799,
    },
  ];

  const [enrolled, setEnrolled] = useState([]);

  const enroll = (course) => {
    if (!enrolled.includes(course.id)) {
      setEnrolled([...enrolled, course.id]);
      setEnrolledCount(enrolledCount + 1);
    }
  };

  return (
    <>
      {courses.map((course) => (
        <div key={course.id} className="course">
          <span>
            {course.name} - ₹{course.price}
          </span>

          <button
            onClick={() => enroll(course)}
            disabled={enrolled.includes(course.id)}
          >
            {enrolled.includes(course.id)
              ? "Enrolled"
              : "Enroll"}
          </button>
        </div>
      ))}
      <hr />
      <h2>Requirement 1 (Prop Drilling)</h2>
      <StudentProfileProps user={user} />
      <hr />
      <h2>Requirement 2 & 3 (Context + Custom Hook)</h2>
      <StudentProfileContext />
    </>
  );
}
export default CourseList;