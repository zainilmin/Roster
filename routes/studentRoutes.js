const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const ObjectId = require('mongodb').ObjectID;
const Student = mongoose.model('students');

module.exports = app => {
  app.get('/api/students', requireLogin, (req, res) => {
    Student.find({}, (error, student) => {
      if (!error) {
        res.send(student);
      } else {
        throw error;
      }
    });
  });

  app.post('/api/students', requireLogin, (req, res) => {
    const { firstname, lastname, grade, section, phone, email } = req.body;

    try {
      const student = new Student({
        firstname: firstname,
        lastname: lastname,
        grade: grade,
        section: section,
        phone: phone,
        email: email
      });
      student.save();
      res.send(student);
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/api/students/:id', requireLogin, (req, res) => {
    Student.find({"_id": ObjectId(req.params.id)}, (error, student) => {
      if(student) {
        res.send(student[0]);
      } else {
        throw error;
      }
    });
  });

  app.post('/api/students/:id', requireLogin, (req, res) => {
    Student.findByIdAndUpdate({"_id": ObjectId(req.params.id)},
      req.body,
      {new: true},
      (error, student) => {
        if(student) {
           res.send(student);
        } else {
          throw error;
        }
      }
    );
  });

  app.get('/api/students/:grade/:section', requireLogin, (req, res) => {
    const studentArr = [];
    Student.find(
      {$and: [{"grade": req.params.grade},
              {"section": req.params.section}]}
    ).sort( { firstname: 1 }
    ).then(
      (students) => {
        for(var i=0; i < students.length; i++) {
          var student = {
            "student_id": students[i]._id,
            "firstname": students[i].firstname,
            "lastname": students[i].lastname,
            "status": "",
            "reason": "",
            "comments": ""
          }
          studentArr.push(student);
        }
        if (studentArr.length > 0) {
          res.send(studentArr);
        } else {
          throw error;
        }
      }
    );
  });
}
