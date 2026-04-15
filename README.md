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
