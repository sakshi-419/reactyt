# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🗂 Task Board – Frontend Internship Assignment

A fully functional Kanban-style Task Board built using **React** with modern state management and persistent storage.

This project demonstrates clean component architecture, reducer-based state handling, drag-and-drop interactions, and a user-focused UI.

---

## 🚀 Live Demo

🔗 https://your-deployment-link.vercel.app

---

## 📂 Repository

🔗 https://github.com/your-username/task-board

---

## ✨ Features

### 🔐 Authentication
- Static login flow
- Route protection
- Remember me using localStorage
- Logout functionality

### 🗂 Task Board
- Fixed columns:
  - Todo
  - Doing
  - Done
- Create, move, and delete tasks
- Drag & drop between columns

### 📝 Task Details
Each task supports:
- Title (required)
- Description
- Priority (Low / Medium / High)
- Due date
- Created timestamp

### 🔍 Search & Filter
- Search by task title
- Filter by priority

### 📅 Sorting
- Sort by due date
- Tasks without due date appear last

### 🧾 Activity Log
Tracks:
- Task created
- Task moved
- Task deleted

### ♻ Reset Board
- Clears all tasks & logs
- Confirmation prompt
- Safe storage handling

### 💾 Persistence
- Data stored in **localStorage**
- Automatically restored on refresh

---

## 🧠 State Management

Implemented using:

- React Context API
- useReducer

This ensures:
- Predictable state updates
- Centralized logic
- Scalable architecture

---

## 🖱 Drag & Drop

Implemented using:

@hello-pangea/dnd

Provides:
- Smooth column transitions
- Instant state sync
- Accessible interactions

---

## 🎨 UI & Styling

- Responsive layout
- Reusable utility classes
- Priority color indicators
- Clean and minimal design

---

## 🧪 Reliability Handling

- Handles empty storage safely
- Graceful reset
- Defensive filtering & sorting

---

## 📁 Project Structure

src
│── components
│── context
│── pages
│── App.jsx
│── main.jsx