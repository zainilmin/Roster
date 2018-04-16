const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
  student_id: Schema.Types.ObjectId,
  schedule_id: Schema.Types.ObjectId,
  firstname: String,
  lastname: String,
  status: String,
  reason: String,
  comments: String
});

mongoose.model('attendance', attendanceSchema);
