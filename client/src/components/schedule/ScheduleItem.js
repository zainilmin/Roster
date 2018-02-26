import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function ScheduleItem({ schedule, grades }) {
  return (
    <tr key={schedule._id}>
      <td>
        <Link to={`/schedules/edit/${schedule._id}`}>
          {moment(schedule.class_date).format("MM/DD/YYYY")}
        </Link>
      </td>
      <td>{schedule.academic_year}</td>
    </tr>
  )
}
