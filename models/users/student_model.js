const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  StudentID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Phone: { type: String },
  Dept: { type: String },
  Branch: { type: String  },
  YearOfStudy: { type: Number },
  InterestedFields: { type: [String] } 
});

module.exports = mongoose.model('Student', StudentSchema);
