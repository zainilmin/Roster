const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

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
    const { firstname, lastname, grade, section } = req.body;

    try {
      const student =  new Student ({
        firstname: firstname,
        lastname: lastname,
        grade: grade,
        section: section
      });
      student.save();
      res.send(student);
    } catch (err) {
      res.send(err);
    }
  });
};
