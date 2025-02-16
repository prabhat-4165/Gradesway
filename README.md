# QuizNest - MERN Stack Application

## 📌 Project Overview

QuizNest is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It provides an interactive quiz platform where users can register, take quizzes, and track their scores.

## 🚀 Features

### 🔹 Authentication

- User Signup & Login (JWT Authentication)
- Secure password hashing with bcrypt

### 🔹 Quiz Management

- Create, Update, and Delete quizzes
- Attempt quizzes and get instant results

### 🔹 Friend System

- Search and add friends
- Accept/reject friend requests
- Friend recommendation system based on mutual connections

## 🛠️ Tech Stack

| Technology         | Description                       |
| ------------------ | --------------------------------- |
| **Frontend**       | React.js, ShadCN UI, React Router |
| **Backend**        | Node.js, Express.js               |
| **Database**       | MongoDB with Mongoose ORM         |
| **Authentication** | JWT, bcrypt                       |
| **Styling**        | Tailwind CSS, ShadCN UI           |

## 📂 Project Structure

```
QuizNest/
├── client/         # Frontend (React.js)
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── pages/      # React Pages
│   │   ├── styles/     # CSS & ShadCN styles
│   ├── public/        # Static files
│   ├── package.json   # Frontend dependencies
│
├── server/         # Backend (Node.js, Express.js)
│   ├── models/      # Mongoose Schemas
│   ├── routes/      # API Routes
│   ├── controllers/ # Business logic
│   ├── middleware/  # Authentication Middleware
│   ├── Database/db.js # MongoDB Connection
│   ├── index.js     # Entry point
│   ├── .env         # Environment variables
│   ├── package.json # Backend dependencies
│
├── README.md       # Documentation
```

## ⚙️ Installation & Setup

### 🔹 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn

### 🔹 Backend Setup

```sh
cd server
npm install
npm run dev
```

### 🔹 Frontend Setup

```sh
cd client
npm install
npm start
```

### 🔹 Environment Variables (.env)

Create a `.env` file in the **server/** directory and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

## 📬 API Endpoints

### 🔹 Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### 🔹 Quiz Management

- `POST /api/quizzes/create` - Create a quiz
- `GET /api/quizzes/` - Fetch all quizzes
- `POST /api/quizzes/attempt` - Submit quiz answers

## 👨‍💻 Contributors

- **[Prabhat Tripathi](https://github.com/prabhat-4165)** - Full Stack Developer

## 📜 License

This project is licensed under the MIT License.

## 🌟 Support & Feedback

If you like this project, consider giving it a ⭐ on GitHub!
