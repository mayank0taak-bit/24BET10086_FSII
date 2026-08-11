import useUser from "../hooks/useUser";

function StudentProfileContext() {
  const user = useUser();

  return (
    <div>
      <h3>Student Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </div>
  );
}

export default StudentProfileContext;