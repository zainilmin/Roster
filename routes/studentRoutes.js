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
    const { firstname,
            lastname,
            grade,
            section,
            phone,
            email,
            gender,
            birth_date } = req.body;

    try {
      const student = new Student({
        firstname: firstname,
        lastname: lastname,
        grade: grade,
        section: section,
        phone: phone,
        email: email,
        gender: gender,
        birth_date: birth_date
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
}
