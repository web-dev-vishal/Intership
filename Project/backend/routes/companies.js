const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const { protect } = require("../middleware/auth");

// GET all companies for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const companies = await Company.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST add a new company
router.post("/", protect, async (req, res) => {
  try {
    const { company, status } = req.body;

    const newCompany = await Company.create({
      company,
      status,
      userId: req.user._id
    });

    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a company
router.delete("/:id", protect, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Check if user owns the company
    if (company.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a company
router.put("/:id", protect, async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Check if user owns the company
    if (company.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;