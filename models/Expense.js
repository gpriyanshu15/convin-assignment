const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  splitMethod: { type: String, required: true },
  participants: [String], // Array of user IDs
  description: { type: String, default: "No description" }, // Optional field
  date: { type: Date, default: Date.now }, // Optional field with a default value
});

module.exports = mongoose.model("Expense", expenseSchema);
