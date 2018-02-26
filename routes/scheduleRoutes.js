const mongoose = require('mongoose');
const requireLogin =  require('../middlewares/requireLogin');
const ObjectId = require('mongodb').ObjectID;
const Schedule = mongoose.model('schedules');

module.exports = app => {
  app.get('/api/schedules', requireLogin, (req, res) => {
    Schedule.find({}, (error, schedule) => {
      if(!error) {
        res.send(schedule);
      } else {
        throw error;
      }
    });
  });

  app.post('/api/schedules', requireLogin, (req, res) => {
    const { class_date, class_time, academic_year, grade, section } = req.body;

    try {
      const schedule = new Schedule({
        class_date: class_date,
        class_time: class_time,
        academic_year: academic_year,
        grade: grade,
        section: section
      });
      schedule.save();
      res.send(schedule);
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/api/schedules/:id', requireLogin, (req, res) => {
    Schedule.find({"_id": ObjectId(req.params.id)},
      (error, schedule) => {
        if(schedule) {
          res.send(schedule[0]);
        } else {
          throw error;
        }
      }
    );
  });

  app.post('/api/schedules/:id', requireLogin, (req, res) => {
    Schedule.findByIdAndUpdate({"_id": ObjectId(req.params.id)},
      req.body,
      {new: true},
      (error, schedule) => {
        if(schedule) {
          res.send(schedule);
        } else {
          throw error;
        }
      }
    )
  });
}