export default [
  {
   label: 'Class Time',
   name: 'class_time',
   options: ['7:00 pm- 9:30 pm', '9.30 am - 12:00 pm', '12:30 pm - 3:30 pm'],
   emptyValueError: 'Please select Class Time'
  },
  {
   label: 'Academic Year',
   name: 'academic_year',
   options: ['2018-2019', '2019-2020', '2020-2021'],
   emptyValueError: 'Please select Academic Year'
  },
  { label: 'Grade',
    name: 'grade',
    options: [7, 8, 9, 10, 11, 12],
    emptyValueError: 'Please select grade'
  },
  {
   label: 'Section',
   name: 'section',
   options: ['A', 'B', 'C'],
   emptyValueError: 'Please select section'
   }
];