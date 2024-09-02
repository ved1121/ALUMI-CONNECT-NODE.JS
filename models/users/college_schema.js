const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  CollegeID: { type: Number, required: true, unique: true },
  CollegeName: { type: String, required: true },
  InstituteName: { type: String, required: true },
  Dept: { type: [String] },  
  Alumni: { type: [Number] },
  Students: { type: [Number] } 

});

module.exports = mongoose.model('College', CollegeSchema);
