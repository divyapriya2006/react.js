// Attendance.jsx
import React, { useState } from "react";

const Attendance = () => {
  // Initial student data
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", status: "Absent" },
    { id: 2, name: "Bob", status: "Absent" },
    { id: 3, name: "Charlie", status: "Absent" }
  ]);

  // Function to mark attendance
  const markAttendance = (id, status) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, status } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div>
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td
                style={{
                  color: student.status === "Present" ? "green" : "red",
                  fontWeight: "bold"
                }}
              >
                {student.status}
              </td>
              <td>
                <button onClick={() => markAttendance(student.id, "Present")}>
                  Present
                </button>
                <button
                  onClick={() => markAttendance(student.id, "Absent")}
                  style={{ marginLeft: "10px" }}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
