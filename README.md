# 🚀 Attendance Management API

A simple REST API built using Node.js and Express.js to manage user attendance with basic CRUD operations.

---

## 📌 Features

- Create user attendance (POST)
- Retrieve all users (GET)
- Update user information (PUT)
- Delete user (DELETE)
- RESTful API design
- JSON-based request & response handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📂 API Endpoints

### 🔹 Create Attendance
**POST** `/attendance`

```json
{
  "username": "John",
  "email": "john@example.com"
}
🔹 Get All Users

GET /attendance

🔹 Update User

PUT /attendance

{
  "userId": 1,
  "username": "New Name"
}
🔹 Delete User

DELETE /attendance

{
  "userId": 1
}
⚠️ Notes
Data is stored in-memory (no database)
This project is for learning backend fundamentals
🚀 How to Run
npm install
npm start

Server runs on:

http://localhost:8282
📈 Future Improvements
Integrate MongoDB
Add authentication (JWT)
Improve validation & error handling
💡 Learning Outcome
REST API design
HTTP methods
Request & response handling
Backend logic using Express.js
