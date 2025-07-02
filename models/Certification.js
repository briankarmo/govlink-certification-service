const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  issuedBy: String,
  issuedDate: Date,
  expiryDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Certification', CertificationSchema);
