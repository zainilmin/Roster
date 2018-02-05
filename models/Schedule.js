const mongoose = require('mongoose');
const { Schema } =  mongoose;

const studentRecord = new Schema({
  studentid: Schema.Types.ObjectId,
  firstname: String,
  lastname: String,
  status: String,
  reason: String,
  comments: String
})

const scheduleSchema = new Schema({
  class_date: Date,
  class_time: String,
  academic_year: String,
  grade: String,
  section: String,
  attendance: [studentRecord]
});

mongoose.model('schedule', scheduleSchema);
