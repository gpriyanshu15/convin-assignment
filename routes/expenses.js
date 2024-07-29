const express = require("express");
const Expense = require("../models/Expense");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
});

router.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log("Fetching expenses for user:", userId);

  try {
    const expenses = await Expense.find({
      participants: userId,
    });

    if (expenses.length === 0) {
      return res
        .status(404)
        .json({ message: "No expenses found for this user." });
    }

    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/overall", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/balance-sheet", async (req, res) => {
  try {
    const expenses = await Expense.find();
    let csv = "Description,Amount,Date\n";
    expenses.forEach((expense) => {
      const description = expense.description || "No description"; // Provide default value
      const date = expense.date
        ? expense.date.toISOString().split("T")[0]
        : "No date"; // Format date
      csv += `${description},${expense.amount},${date}\n`;
    });
    res.setHeader(
      "Content-disposition",
      "attachment; filename=balance-sheet.csv"
    );
    res.setHeader("Content-type", "text/csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
