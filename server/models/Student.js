const mongoose = require('mongoose');
const { Schema } =  mongoose;

const studentSchema = new Schema ({
  first_name: String,
  last_name: String,
  grade: Number,
  class: String,
});

mongoose.model.('students', studentSchema);