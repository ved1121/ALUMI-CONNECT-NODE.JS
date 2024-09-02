const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema({
  AlumniID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Phone: { type: String },
  GraduationYear: { type: String },
  FieldOfStudy: { type: String },
  CurrentLocation: { type: String },
  Industry: { type: String },
  ProfilePicture: { type: String }
});

module.exports = mongoose.model('Alumni', AlumniSchema);
