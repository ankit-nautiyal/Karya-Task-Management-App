# **Task Manager App: An Advanced React To-Do Application with API Integration** 📝✅  

A simple yet efficient **Task Manager App** built with **React.js** and **Redux Toolkit** for seamless task management. This project is designed with **state management**, **asynchronous API calls using Axios**, and a clean, responsive UI.  

---  

## 🚀 **Features**  

✔️ **Add Tasks** – Users can input new tasks effortlessly.  
✔️ **Mark as Done/Undo** – Click to mark a task as complete (strikethrough styling). Clicking again will undo the action.  
✔️ **Delete Tasks** – Remove tasks from the list with a single click.  
✔️ **Persisted State** – The task list persists across sessions using Redux.  
✔️ **Weather API Integration** – Fetches real-time weather data using Axios.  
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
![image](https://github.com/user-attachments/assets/94fd1253-4e01-42f6-8ff7-e8987c983f96)
![image](https://github.com/user-attachments/assets/0d5a4392-6241-475d-baaf-af8f686269ff)
![image](https://github.com/user-attachments/assets/bdb612df-e746-4dd8-9270-3029b85b9df8)
![image](https://github.com/user-attachments/assets/8a6b45c9-d6f8-4809-93a3-ee536e65889e)
![image](https://github.com/user-attachments/assets/c62bbcf3-9c1b-41c5-ba6b-d1fad36f40ab)
![image](https://github.com/user-attachments/assets/bc14323a-166d-4513-9e64-6034c72d4aee)
![image](https://github.com/user-attachments/assets/701df4c0-d5e8-4cb3-b3e2-5c56ae93e41e)
![image](https://github.com/user-attachments/assets/a41191d8-4405-44ad-ad02-db230971e850)
![image](https://github.com/user-attachments/assets/b1528230-3619-473e-81c9-4afa22cc7cd1)
![image](https://github.com/user-attachments/assets/717860d9-3e6c-4714-80c3-d6867bbb9ad6)
![image](https://github.com/user-attachments/assets/292f49c8-b31a-4925-b092-84fb7f3eddcb)
![image](https://github.com/user-attachments/assets/60ee90fb-1569-4cef-b4f6-d1bf3747741f)
![image](https://github.com/user-attachments/assets/21c62582-6ef1-4e09-8ec9-acd04da367c9)
![image](https://github.com/user-attachments/assets/0b71ac59-d909-4983-8878-e59edcf5ebb0)
![image](https://github.com/user-attachments/assets/05ae2409-bbba-4955-a848-282bf31e2d8f)
![image](https://github.com/user-attachments/assets/4a8130b7-9a94-44f5-85d1-9bfa8a411419)
![image](https://github.com/user-attachments/assets/73ce41fd-a396-4d7f-b9ec-2730398c7955)
![image](https://github.com/user-attachments/assets/ba586c00-92fd-4b0f-af13-20880de55135)



---
## 🏗️ **Setup & Installation**  

### **Prerequisites**  
Make sure you have the following installed:  
- **Node.js** (v16+)  
- **npm** or **yarn**  

### **Step 1: Clone the Repository**  
```bash
git clone https://github.com/your-username/task-manager-app.git
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
