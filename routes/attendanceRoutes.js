const mongoose = require('mongoose');
const requireLogin =  require('../middlewares/requireLogin');
const ObjectId = require('mongodb').ObjectID;
const Student = mongoose.model('students');
const Schedule = mongoose.model('schedules');
const Attendance = mongoose.model('attendance');

module.exports = app => {
  app.get('/api/attendance/:grade/:section/:id', requireLogin, (req, res) => {

    Attendance.find(
      {"schedule_id": ObjectId(req.params.id)},
      (error, record) => {
        if (!error) {
          res.send(record);
        } else {
          throw error;
        }
      }
    ).sort({ firstname: 1 });
  });

  app.get('/api/attendance/save/:grade/:section/:id',
    requireLogin,
    (req, res) => {
      Attendance.find({"schedule_id": ObjectId(req.params.id)},
        (error, attendance) => {
          if(attendance.length == 0) {
            Student.find(
              {$and: [{"grade": req.params.grade},
                      {"section": req.params.section}]},
              (error, students) => {
                for(var i=0; i < students.length; i++) {
                  var attendance = new Attendance({
                    student_id: ObjectId(students[i]._id),
                    schedule_id: ObjectId(req.params.id),
                    firstname: students[i].firstname,
                    lastname: students[i].lastname,
                    status: "",
                    reason: "",
                    comments: ""
                  });
                  attendance.save();
                }
                res.send("saved attendance");
              }
            );
          }
        }
      );
    }
  );

  app.post('/api/attendance/:grade/:section/:id', requireLogin, (req, res) => {
    const { attendance } = req.body;
    for(var i=0; i < attendance.length; i++) {
      Attendance.update({"_id": ObjectId(attendance[i]._id)},
        {
          $set: {
            status: attendance[i].status,
            reason: attendance[i].reason,
            comments: attendance[i].comments
          }
        }).exec();
    }
    res.send(attendance);
  });
}
