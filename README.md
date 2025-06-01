# 🌐 RESTful API with Node.js, Express & MongoDB

A clean and modular RESTful API built with **Node.js**, **Express**, and **MongoDB Atlas** using **Mongoose** as an ODM. This project performs full CRUD operations on user data and is designed for clarity, scalability, and easy integration with front-end applications.

---

## 🚀 Features

- ✅ MongoDB Atlas integration with Mongoose
- ✅ RESTful routes (GET, POST, PUT, DELETE)
- ✅ Modular structure (routes/models/controllers)
- ✅ Input validation using Mongoose schema
- ✅ Tested with Thunder Client & MongoDB Compass

---

## 📁 Folder Structure

restful-api/
│
├── server.js # Entry point of the app
├── package.json # Project metadata and scripts
├── models/
│ └── User.js # Mongoose user schema
├── routes/
│ └── userRoutes.js # All user-related API routes
└── README.md # Project documentation


---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Thunder Client** (for API testing)
- **MongoDB Compass** (for DB visualization)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sangal29/restful-api.git
cd restful-api
2. Install Dependencies

npm install
3. Configure MongoDB Atlas
Replace the placeholder in server.js with your own MongoDB Atlas connection string:


mongoose.connect('your-mongodb-atlas-uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

💡 You can use environment variables for secure storage (with dotenv in production).

📡 Run the Server

npm start
Server will start on:

http://localhost:3000
📬 API Endpoints
Method	   Endpoint	       Description
GET	       /users	         Fetch all users
GET	      /users/:id	     Fetch a single user
POST	    /user            Create a new user
PUT	      /user/:id	       Update an existing user
DELETE	  /user/:id	       Delete a user



📌 To-Do / Future Improvements
Add controllers for cleaner code separation

Add environment variable support via dotenv

Implement input validation middleware (e.g., express-validator)

Add user authentication (JWT)

