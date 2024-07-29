Expense Sharing App
Overview
This project is a backend implementation of a daily-expenses sharing application built with Node.js, Express.js, and Mongoose. It allows users to manage their daily expenses and split them using various methods such as equal, exact, and percentage. It also includes functionality for generating and downloading a balance sheet.

Features
User Management: Create and retrieve user details.
Expense Management: Add expenses, split expenses by different methods, and retrieve expense details.
Balance Sheet: Generate and download a balance sheet in CSV format.
Setup and Installation
Step 1: Clone the Repository
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/expense-sharing-app.git
cd expense-sharing-app
Step 2: Install Dependencies
Install the required dependencies:

bash
Copy code
npm install
(Optional) Install nodemon for auto-reloading during development:

bash
Copy code
npm install --save-dev nodemon
Step 3: Start MongoDB
Ensure that MongoDB is installed and running. You can start it with:

bash
Copy code
mongod
Step 4: Start the Application
Start the application using nodemon (or node if nodemon is not installed):

bash
Copy code
npm start
The server will start on http://localhost:3000.

API Endpoints
Users
Create a User

Endpoint: POST /users
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "name": "John Doe",
  "mobileNumber": "1234567890"
}
Response: User object
Retrieve User Details

Endpoint: GET /users/:id
Parameters: id - User ID
Response: User object
Expenses
Add an Expense

Endpoint: POST /expenses
Request Body:
json
Copy code
{
  "amount": 3000,
  "description": "Dinner",
  "date": "2024-07-29T00:00:00Z",
  "method": "equal",
  "participants": ["userId1", "userId2", "userId3"]
}
Response: Expense object
Retrieve Individual User Expenses

Endpoint: GET /expenses/user/:userId
Parameters: userId - User ID
Response: Array of expense objects
Retrieve Overall Expenses

Endpoint: GET /expenses/overall
Response: Array of expense objects
Download Balance Sheet

Endpoint: GET /expenses/balance-sheet
Response: CSV file
Error Handling
Validation errors are returned with a 400 status code.
Server errors are returned with a 500 status code.
Development and Testing
For development, you can use nodemon for automatic server restarts.
Unit and integration tests can be added using testing frameworks like mocha and chai.
Contributing
Feel free to fork the repository and submit pull requests. If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.
