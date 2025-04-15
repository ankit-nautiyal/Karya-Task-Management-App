# **Task Management App📝: An Advanced React To-Do Application with API Integration**✅  

A simple yet efficient **Task Manager App** built with **React.js** and **Redux Toolkit** for seamless task management. This project is designed with **state management**, **asynchronous API calls using Axios**, filter & sort options, a clean, responsive UI & more .

---  

## 🚀 **Features**  

- ✔️ **View Tasks** – Users can view all tasks in an ordered list. 
- ✔️ **Add Tasks** – Users can input new tasks effortlessly.  
- ✔️ **Mark as Done/Undo** – Check the task Checkbox or set the status as '✅ Done' to mark a task as complete (strikethrough styling). Unchecking the checkbox/changing status again will undo the action.

- ✔️ **Edit Tasks** – Users can edit the tasks in real time.  
- ✔️ **Delete Tasks** – Users can remove tasks from the list with a single click (the app confirms before deleting).
- ✔️ **Delete All Tasks** – Users can delete all the tasks at once.
- ✔️ **Delete All Tasks** – Users can mark all the tasks as done at once. 
- ✔️ **Tasks Priority** – Users can mark tasks as '🔴 High', '🟡 Medium' & '🟢 Low' for specifying their priority.  
- ✔️ **Tasks Status** – Users can mark tasks as '📌 To-Do', '⚙️ In-Progress' & '✅ Done' for specifying their completion status. 
- ✔️ **Filter & Sort** – Users can filter & sort as per their status, date/time of creation & priority of tasks, & reset to default with reset button. 
- ✔️ **Persisted State** – The task list & authentication status (mock authentication) persist across sessions using Redux & localStorage.  
- ✔️ **Weather API Integration** – Fetches real-time weather data from OpenWeather API using Axios.  
- ✔️ **Weather Alert for Outdoor Tasks**— This alerts the user by showing the current city's weather if an outdoor task is added to the to-do list.
- ✔️ **Drag & Drop Tasks** – Drag and drop functionality to reorder the tasks.
- ✔️ **Responsive Design** – Fully functional across all screen sizes.
- ✔️ **Theme Toggle** – Theme toggle button (dark/light).   

---

## 🛠 **Tech Stack**  

- **Frontend:** HTML, CSS, JavaScript, React.js, Redux Toolkit, Material UI, React Router
- **State Management:** Redux  
- **API Handling:** Axios  
- **Styling:** CSS Modules  
- **Build Tool:** Vite (for fast development)  

---
## 📷 **Project Snapshots** 

![image](https://github.com/user-attachments/assets/1bd4d8e7-d021-413d-b610-f58c39bde316)
![image](https://github.com/user-attachments/assets/a2a97d4f-263c-4a83-8a34-befad8f2e8b0)
![image](https://github.com/user-attachments/assets/3964fcae-9b64-44d1-8b02-a347fcfbb226)
![image](https://github.com/user-attachments/assets/ce573eff-9273-49c4-ab53-30640248ba27)
![image](https://github.com/user-attachments/assets/7b3adda8-f0a7-4941-93b7-b23ccf55f8a1)
![image](https://github.com/user-attachments/assets/ae70c8a0-11fb-4534-aaac-7b00931c269f)
![image](https://github.com/user-attachments/assets/18b6e31d-7115-438e-8f76-95040d78ba31)
![image](https://github.com/user-attachments/assets/fe3d05b7-e090-463d-be87-b5805a2b914d)
![image](https://github.com/user-attachments/assets/e9b46498-6d52-4749-a561-44ef7eeae32e)
![image](https://github.com/user-attachments/assets/2903f7e5-186a-40b4-a41e-c8c5e324654f)
![image](https://github.com/user-attachments/assets/59bace37-59f3-4e1d-8c95-82729a6bf5e5)
![image](https://github.com/user-attachments/assets/74515d31-d4ba-45ca-8b2b-0ba8a11c3b53)
![image](https://github.com/user-attachments/assets/b6b0b58f-a609-44f4-a917-c345bf20333a)
![image](https://github.com/user-attachments/assets/c6cee56d-6316-48de-95f0-2788ef51c3f6)
![image](https://github.com/user-attachments/assets/4bee5182-d5b8-4c5e-8807-320ee8a44479)
![image](https://github.com/user-attachments/assets/cfee1dbd-5589-4220-a736-5e4eaac4a8e4)
![image](https://github.com/user-attachments/assets/4443751c-624a-4141-bd9b-5d92ecc39aad)
![image](https://github.com/user-attachments/assets/dc87329b-a213-4979-a3fc-229b5444afdc)











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
📂 task-management-app/
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
│   │   ├── 📄 FilterMenu.jsx  # Filter & Sort button component
│   │   ├── 📄 Footer.jsx      # Footer component 
│   │   └── 📄 Navbar.jsx      # Navbar component 
│   │   ├── 📄 PriorityMenu.jsx  # Priority dropdown menu component
│   │   ├── 📄 Status Menu.jsx  # Status dropdown menu component
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
│   │   ├── 📄 WeatherInfo.module.css
│   │   ├── 📄 Navbar.module.css
│   │   ├── 📄 Footer.module.css
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
