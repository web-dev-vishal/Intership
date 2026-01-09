const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["Applied", "Interview", "Selected", "Rejected"],
    default: "Applied"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Company", companySchema);