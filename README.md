# 🚀 Attendance Management API

A simple REST API built using Node.js and Express.js to manage user attendance with basic CRUD operations.

---

## 📌 Features

- Create user attendance (POST)
- Retrieve all users (GET)
- Update user information (PUT)
- Delete user (DELETE)
- Uses RESTful API structure
- JSON-based request and response handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📂 API Endpoints

### ➤ Create Attendance
POST `/attendance`

```json
{
  "username": "John",
  "email": "john@example.com"
}
➤ Get All Users

GET /attendance

➤ Update Username

PUT /attendance

{
  "userId": 1,
  "username": "New Name"
}
➤ Delete User

DELETE /attendance

{
  "userId": 1
}
⚠️ Note
Data is stored in-memory (array), not in a database
This project is built for learning backend fundamentals
🚀 How to Run
npm install
npm start

Server will run on:

http://localhost:8282
📈 Future Improvements
Integrate MongoDB database
Add authentication (JWT)
Implement validation middleware
Improve error handling
💡 Learning Outcome

This project helped in understanding:

REST API design
HTTP methods
Request & response handling
Backend logic structuring using Express.js
