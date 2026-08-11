import React from 'react';

const StudentProfile = ({ user }) => {
  return (
    <div>
      <h4>Student Profile</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </div>
  );
};

export default StudentProfile;