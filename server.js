const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const expenseRoutes = require("./routes/expenses");

const { connectToMongoDB } = require("./connect");

connectToMongoDB("mongodb://127.0.0.1:27017/expense-sharing-app").then(() =>
  console.log("Mongodb connected")
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Expense Sharing App");
});

app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
