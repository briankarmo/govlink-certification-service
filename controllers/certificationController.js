const Certification = require('../models/Certification');

exports.addCertification = async (req, res) => {
  try {
    const cert = new Certification(req.body);
    const saved = await cert.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCertificationsByUser = async (req, res) => {
  try {
    const certs = await Certification.find({ userId: req.params.userId });
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCertification = async (req, res) => {
  try {
    const deleted = await Certification.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
