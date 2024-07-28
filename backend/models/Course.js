const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  status: { type: String, enum: ['marked', 'unmarked'], default: 'unmarked' }
});

const TestSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  status: { type: String, enum: ['marked', 'unmarked'], default: 'unmarked' }
});

const FinalAssessmentSchema = new mongoose.Schema({
  type: { type: String, enum: ['exam', 'project'], required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['marked', 'unmarked'], default: 'unmarked' }
});

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lecturer: { type: String, required: true },
  startDate: { type: Date, required: true },
  assignments: [AssignmentSchema],
  tests: [TestSchema],
  finalAssessment: FinalAssessmentSchema,
  marksheetStatus: { type: String, enum: ['completed', 'pending'], default: 'pending' }
});

module.exports = mongoose.model('Course', CourseSchema);
