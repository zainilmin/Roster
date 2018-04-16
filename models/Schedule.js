const mongoose = require('mongoose');
const { Schema } =  mongoose;

const scheduleSchema = new Schema({
  class_date: Date,
  class_time: String,
  academic_year: String,
  grade: Number,
  section: String
});

mongoose.model('schedules', scheduleSchema);
