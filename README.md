# **Task Management App📝: An Advanced React To-Do Application with API Integration** ✅  

A simple yet efficient **Task Manager App** built with **React.js** and **Redux Toolkit** for seamless task management. This project is designed with **state management**, **asynchronous API calls using Axios**, filter & sort options, a clean, responsive UI & more .

---  

## 🚀 **Features**  

✔️ **View Tasks** – Users can view all tasks in an ordered list. 
✔️ **Add Tasks** – Users can input new tasks effortlessly.  
✔️ **Mark as Done/Undo** – Check the task Checkbox or set status as "✅ Done" to mark a task as complete (strikethrough styling). Unchecking the checkbox/changing status again will undo the action.
✔️ **Edit Tasks** – Users can edit the tasks in real time.  
✔️ **Delete Tasks** – Users can remove tasks from the list with a single click (the app confirms before deleting). 
✔️ **Tasks Priority** – Users can mark tasks as '🔴 High', '🟡 Medium' & '🟢 Low' for specifying their priority.  
✔️ **Tasks Status** – Users can mark tasks as '📌 To-Do', '⚙️ In-Progress' & '✅ Done' for specifying their completion status. 
✔️ **Filter & Sort** – Users can filter & sort as per their staus, date/time of creation & priority. 
✔️ **Persisted State** – The task list & authentication status (mock authentication) persist across sessions using Redux & localStorage.  
✔️ **Weather API Integration** – Fetches real-time weather data from OpenWeather API using Axios.  
✔️ **Weather Alert for Outdoor Tasks** – Alerts by showing your current city's weather if an outdoor task is added to the to-do list.
✔️ **Drag & Drop Tasks** – Drag and drop functionality to reorder the tasks.
✔️ **Responsive Design** – Fully functional across all screen sizes.  

---

## 🛠 **Tech Stack**  

- **Frontend:** HTML, CSS, JavaScript, React.js, Redux Toolkit, Material UI, React Router
- **State Management:** Redux  
- **API Handling:** Axios  
- **Styling:** CSS Modules  
- **Build Tool:** Vite (for fast development)  

---
## 📷 **Project Snapshots** 




---
## 🏗️ **Setup & Installation**  

### **Prerequisites**  
Make sure you have the following installed:  
- **Node.js** (v16+)  
- **npm** or **yarn**  

### **Step 1: Clone the Repository**  
```bash
git clone https://github.com/ankit-nautiyal/Task-Management-App.git
cd task-manager-app
```

### **Step 2: Install Dependencies**  
```bash
npm install
# or
yarn install
```

### **Step 3: Set Up Environment Variables**  
Create a `.env` file in the root directory and add the following:  
```
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_openweather_api_key
```

> 🔹 **Replace `your_openweather_api_key` with your actual API key** from [OpenWeather](https://openweathermap.org/api).  

### **Step 4: Run the App**  
Start the development server:  
```bash
npm run dev
# or
yarn dev
```

This will start the application on `http://localhost:5173/`.  

---

## 🏗️ **Folder Structure**  
```
📂 task-manager-app/
├── 📂 node_modules/          # Dependencies (auto-generated)
├── 📂 public/
│   └── 📄 favicon.webp       # Website favicon
├── 📂 src/
│   ├── 📂 api/               # API-related files
│   │   ├── 📄 axiosClient.js # Axios instance for API calls
│   │   └── 📄 weatherAPI.js  # Weather API functions
│   ├── 📂 app/
│   │   └── 📄 store.js       # Redux store configuration
│   ├── 📂 components/        # Reusable UI components
│   │   ├── 📄 TaskInput.jsx  # Input field for tasks
│   │   ├── 📄 TaskList.jsx   # Task list display
│   │   └── 📄 WeatherInfo.jsx # Weather info component
│   ├── 📂 features/          # Redux slices (state management)
│   │   ├── 📄 authSlice.jsx   # Authentication state
│   │   ├── 📄 taskSlice.jsx   # Task state management
│   │   └── 📄 weatherSlice.jsx # Weather data management
│   ├── 📂 pages/             # Main page components
│   │   ├── 📄 auth.jsx       # Authentication page
│   │   └── 📄 home.jsx       # Home page
│   ├── 📂 styles/            # CSS Module styles
│   │   ├── 📄 Auth.module.css
│   │   ├── 📄 TaskInput.module.css
│   │   ├── 📄 TaskList.module.css
│   ├── 📄 App.css            # Global styles
│   ├── 📄 App.jsx            # Root component
│   ├── 📄 index.css          # Main CSS file
│   ├── 📄 main.jsx           # Main entry point
├── 📄 .env                   # Environment variables
├── 📄 .gitignore             # Git ignore file
├── 📄 eslint.config.js       # ESLint configuration
├── 📄 index.html             # HTML entry point
├── 📄 package.json           # Project metadata & dependencies
├── 📄 package-lock.json      # Package lock file
├── 📄 README.md              # Project documentation
└── 📄 vite.config.js         # Vite configuration
```
---

## 📌 **Usage**  

1. **Add a new task**: Type in the input field and press enter.  
2. **Mark task as done**: Click the task to toggle strikethrough styling.  
3. **Delete task**: Click the ❌ button to remove it.  
4. **Check the weather**: Enter a city name and get real-time weather data.  

---

## 🚀 **Build & Deploy**  

To create a production build:  
```bash
npm run build
# or
yarn build
```

To deploy on **Vercel**:  
```bash
vercel --prod
```
To deploy on **Netlify**:  
```bash
netlify deploy --prod
```

---

## 📜 **License**  
This project is licensed under the **MIT License**.

---

## 🎯 **Future Improvements**  
🔹 **Local Storage Integration** to persist tasks without Redux.  
🔹 **Dark Mode Toggle** for a better UX.  
🔹 **Animations** for smoother transitions.  

---

## 🤝 **Contributing**  
If you'd like to contribute:  
1. Fork the repo  
2. Create a feature branch (`git checkout -b feature-branch`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push to GitHub (`git push origin feature-branch`)  
5. Open a Pull Request 🎉  

---

## ⭐ **Support & Feedback**  
If you like this project, don't forget to **star 🌟** the repo!  
For feedback, open an issue or contact me at: **nautiyalankit65@gmail.com**  

---

### 🎉 **Happy Coding!** 🚀
