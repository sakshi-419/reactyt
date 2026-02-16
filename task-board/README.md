📋 Task Board – React + Vite

A responsive Kanban-style Task Management App built using React, Vite, and LocalStorage.
Users can log in, create tasks, manage their progress, and track activity.

🔗 Live Demo: https://reactyt-lwwk.vercel.app/

✨ Features

🔐 Login with Remember Me (LocalStorage)

➕ Add tasks with:

Title

Description

Priority (Low / Medium / High)

Due date

Tags

🧭 Drag & drop tasks between:

TODO

DOING

DONE

🔍 Search & filter tasks

🗑 Delete tasks

📜 Activity log

🚪 Logout & redirect to login

📱 Fully responsive (mobile friendly)

💾 Data persistence using LocalStorage

🛠️ Tech Stack

⚛️ React

⚡ Vite

🎨 CSS (Glassmorphism UI)

🧠 LocalStorage

🌐 Vercel (Deployment)

🧩 @hello-pangea/dnd (Drag & Drop)

📅 Day.js (Date handling)

🆔 UUID (Unique IDs)

📂 Project Structure
task-board
│── public
│── src
│   ├── components
│   │   ├── Login.jsx
│   │   ├── Board.jsx
│   │   ├── Column.jsx
│   │   └── TaskCard.jsx
│   ├── hooks
│   │   └── useLocalStorage.js
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vercel.json

⚙️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/sakshi-419/reactyt.git

2️⃣ Go into project
cd task-board

3️⃣ Install dependencies
npm install

4️⃣ Run locally
npm run dev

🚀 Build for Production
npm run build

🌍 Deployment (Vercel)

This project is deployed on Vercel with SPA routing support using:

{
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}

📱 Responsive Design

Desktop → 3 column layout + activity panel

Tablet → stacked columns

Mobile → single column flow

🧠 Future Improvements

Backend authentication

User accounts

Cloud database

Dark / Light theme toggle

Task editing

Due date reminders

👩‍💻 Author

Sakshi Choudhary

GitHub: https://github.com/sakshi-419




