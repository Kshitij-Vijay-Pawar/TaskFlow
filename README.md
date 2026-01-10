# ✅ TaskFlow — Modern Productivity To-Do App

🔗 **Live Demo:** https://taskflow-u8iq.onrender.com

TaskFlow is a **modern, full-featured task management web application** inspired by tools like **Todoist** and **Notion**.  
It focuses on **clean UI, scalability, and real-world frontend best practices**, making it ideal as a **portfolio and interview project**.

---

## 🚀 Features

- 📋 Create, update, and delete tasks  
- ✅ Mark tasks as completed  
- 🧠 Priority management (High / Medium / Low)  
- 🏷️ Tag system with color support  
- 📅 Calendar view (grouped by due dates)  
- 🔍 Smart search with debounce & routing  
- 📊 Statistics dashboard with charts  
- 🌗 Light / Dark theme (persisted)  
- 📱 Fully responsive (desktop & mobile)  
- ⚡ Fast UI powered by Vite  
- 🔄 API-based CRUD using `json-server`  

---

## 🧩 Tech Stack

### Frontend
- **React**
- **React Router**
- **Tailwind CSS v4**
- **Axios**
- **Vite**

### Backend (Mock API)
- **json-server**

### Charts & UI
- **react-google-charts**
- SVG icons
- CSS variables for theming

### DevOps & Deployment
- **GitHub**
- **Render Hosting**

---

## 📁 Folder Structure

```
src/
├── api/                # Axios API calls
│   ├── todos.api.js
│   └── tag.api.js
│
├── assets/             # Static assets & constants
│   └── tagColors.js
│
├── components/
│   ├── Sidebar/        # Sidebar & navigation
│   ├── pages/          # Route-level pages
│   ├── task/           # Task details & forms
│   └── ui/             # Reusable UI components
│
├── context/            # Global state (Context API)
│   ├── TodoContext.jsx
│   ├── ThemeContext.jsx
│   └── useTodoContext.js
│
├── utils/              # Helper utilities
│   ├── stats.js
│   └── theme.js
│
├── server/
│   └── db.json         # json-server database
│
├── App.jsx
├── AppLayout.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Kshitij-Vijay-Pawar/TaskFlow.git
cd TaskFlow
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start json-server

```bash
npx json-server --watch src/server/db.json --port 5000
```

### 4️⃣ Start Frontend

```bash
npm run dev
```

Open in browser:
👉 `http://localhost:5173`

---

## 🌗 Theme System

* Light and Dark mode support
* Implemented using CSS variables
* Theme preference persists via `localStorage`
* SVG icons adapt automatically to theme

---

## 🧠 Architecture Highlights

* Clean component-based architecture
* Reusable UI components
* Centralized Axios API layer
* Context API for global state management
* Scalable and maintainable folder structure
* Interview-ready code quality

---

## 📈 Why This Project Matters

This project demonstrates my ability to:

* Design **real-world UIs**
* Write **clean, maintainable React code**
* Handle **application state correctly**
* Implement **routing & filtering logic**
* Integrate APIs and manage async data
* Deploy and maintain a **live production app**

---

## 👨‍💻 About Me

I’m **Kshitij Pawar**, a **Frontend / Full-Stack Developer** passionate about building scalable, user-focused web applications.

I’m actively looking for opportunities where I can:

* Learn from real-world systems
* Contribute to impactful products
* Grow as a professional developer

📫 **Open to Frontend & Full-Stack roles**

---

## ⭐ Feedback & Contributions

If you like this project:

* ⭐ Star the repository
* 🐛 Report issues
* 💡 Suggest improvements

Thanks for checking out **TaskFlow** 🚀


---
