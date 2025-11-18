# 🎬 Movie Booking App

A full-stack movie booking application built with **React.js (frontend)** and **Node.js + Express + MongoDB (backend)**.  
Users can sign up, log in, browse available movies, make bookings, and view their booking history.

---

## 🚀 Live Links

- **Frontend:** [https://movie-booking-five-sooty.vercel.app](https://movie-booking-five-sooty.vercel.app)  
- **Backend API Base URL:** [https://movies-backend-hazel.vercel.app/api](https://movies-backend-hazel.vercel.app/api)

---

## 🔑 Test Credentials

| Email | Password |
|-------|-----------|
| azam123@gmail.com | azam123 |
| rehanshaikh786@gmail.com | rehanshaikh786 |

---

## 🧠 Features

- 🔐 User authentication (Sign up & Login)
- 🎥 Browse movies list
- 🪑 Book movie tickets
- 📜 View your bookings
- 🚪 Logout functionality
- 🛡️ Protected routes (frontend only)

---

## 🧭 API Endpoints

### **Base URL**

### **Authentication Routes**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Login existing user |

### **Movie Routes**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/movies` | Fetch all movies |
| GET | `/movies/:id` | Fetch details of a specific movie |

### **Booking Routes**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/bookings` | Get all bookings for logged-in user |
| POST | `/bookings` | Create a new booking |

---

## 💡 Features

- 🔐 User Authentication (Signup & Login)
- 🎞️ Browse available movies
- 🎟️ Book tickets easily
- 📜 View and manage your bookings
- 🚪 Logout functionality
- 🛡️ Protected routes (Frontend only)

---

## ⚙️ Tech Stack

### **Frontend**
- React.js  
- React Router DOM  
- Tailwind CSS / Custom CSS  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- CORS  

---

## 💻 Local Setup Guide

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/movie-booking-app.git
cd movie-booking-app

2️⃣ Setup Backend
cd backend
npm install
npm start

Create a .env file in the backend folder with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

3️⃣ Setup Frontend
cd frontend
npm install
npm start