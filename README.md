# 🏀 TeamUp – Connect Through Local Sports Events

TeamUp is a full-stack web application designed to help users discover, join, and host local sports events. Whether it's a football match in the neighborhood or a virtual chess tournament, TeamUp brings players together with ease.

## 🌟 Features

- 🔍 **Browse Events**: View all upcoming offline and online events.
- 📅 **Create Events**: Registered users can host their own sports events.
- 📍 **Search by Location**: Quickly find events near you.
- 🎯 **Player Invites**: Send and receive invitations to join events.
- 🔐 **Authentication**: User login and profile management.

## 🧑‍💻 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## 🚀 Live Demo

🌐 [Live Site](https://teamup-6goy.onrender.com)  
⚙️ Backend API: Hosted on [Render](https://render.com)

## 🛠️ Getting Started Locally

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- npm

### 1. Clone the repo

```bash
git clone https://github.com/advayS10/teamup.git
cd teamup
```
### 2. Setup backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` with:

```bash
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Run backend:

```bash
node index.js
```

### 3. Setup frontend

```bash
cd ../frontend
npm install
```

Create a .env file in /frontend with:

```bash
VITE_API_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

## 📂 Folder Structure

```bash
teamup/
├── frontend/         # React frontend
├── backend/          # Express + MongoDB backend
├── README.md
```

## 📌 Upcoming Features

- 🗓 Calendar view for upcoming events
- 🔔 Real-time notifications
- 📱 PWA support for mobile





