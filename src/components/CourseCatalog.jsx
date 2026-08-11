import CourseList from "./CourseList";
function CourseCatalog({
  user,
  enrolledCount,
  setEnrolledCount,
}) {
  return (
    <>
      <h2>COURSE CATALOG</h2>
      <CourseList
        user={user}
        enrolledCount={enrolledCount}
        setEnrolledCount={setEnrolledCount}
      />
    </>
  );
}
export default CourseCatalog;