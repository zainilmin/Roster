const mongoose = require('mongoose');
const { Schema } =  mongoose;

const studentSchema = new Schema ({
  //_id: Schema.Types.ObjectId,
  firstname: String,
  lastname: String,
  grade: Number,
  section: String
//  attendance: [{
//    classID: { type: Schema.Types.ObjectId, ref: 'ClassSchedule' },
//    status: String,
//    comments: String
//  }]
});

mongoose.model('students', studentSchema);
