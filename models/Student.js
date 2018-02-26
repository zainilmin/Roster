const mongoose = require('mongoose');
const { Schema } =  mongoose;

const studentSchema = new Schema ({
  //_id: Schema.Types.ObjectId,
  firstname: String,
  lastname: String,
  grade: Number,
  section: String,
  phone: String,
  email: String
});

mongoose.model('students', studentSchema);
