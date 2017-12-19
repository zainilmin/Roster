const mongoose = require('mongoose');
const { Schema } =  mongoose;

const classScheduleSchema = new Schema({
  classDate: Date,
  classTime: String
});

mongoose.model('classschedule', classScheduleSchema);
