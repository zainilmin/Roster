import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentItem({ student, grades }) {
  return (
    <tr key={student._id}>
      <td>
        <Link to={`/students/edit/${student._id}`}>
          {student.firstname} {student.lastname}
        </Link>
      </td>
      <td>{student.grade}</td>
      <td>{student.section}</td>
      <td>{student.phone}</td>
      <td>{student.email}</td>
    </tr>
  )
}