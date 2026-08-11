import CourseCatalog from "./CourseCatalog";

function Dashboard({
  user,
  enrolledCount,
  setEnrolledCount,
}) {
  return (
    <CourseCatalog
      user={user}
      enrolledCount={enrolledCount}
      setEnrolledCount={setEnrolledCount}
    />
  );
}
export default Dashboard;