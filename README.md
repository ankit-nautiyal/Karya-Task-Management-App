# **Task Management App📝: An Advanced React To-Do Application with API Integration** ✅  

A simple yet efficient **Task Manager App** built with **React.js** and **Redux Toolkit** for seamless task management. This project is designed with **state management**, **asynchronous API calls using Axios**, filter & sort options, a clean, responsive UI & more .

---  

## 🚀 **Features**  

- ✔️ **View Tasks** – Users can view all tasks in an ordered list. 
- ✔️ **Add Tasks** – Users can input new tasks effortlessly.  
- ✔️ **Mark as Done/Undo** – Check the task Checkbox or set the status as '✅ Done' to mark a task as complete (strikethrough styling). Unchecking the checkbox/changing status again will undo the action.

- ✔️ **Edit Tasks** – Users can edit the tasks in real time.  
- ✔️ **Delete Tasks** – Users can remove tasks from the list with a single click (the app confirms before deleting). 
- ✔️ **Tasks Priority** – Users can mark tasks as '🔴 High', '🟡 Medium' & '🟢 Low' for specifying their priority.  
- ✔️ **Tasks Status** – Users can mark tasks as '📌 To-Do', '⚙️ In-Progress' & '✅ Done' for specifying their completion status. 
- ✔️ **Filter & Sort** – Users can filter & sort as per their status, date/time of creation & priority of tasks, & reset to default with reset button. 
- ✔️ **Persisted State** – The task list & authentication status (mock authentication) persist across sessions using Redux & localStorage.  
- ✔️ **Weather API Integration** – Fetches real-time weather data from OpenWeather API using Axios.  
- ✔️ **Weather Alert for Outdoor Tasks**— This alerts the user by showing the current city's weather if an outdoor task is added to the to-do list.
- ✔️ **Drag & Drop Tasks** – Drag and drop functionality to reorder the tasks.
- ✔️ **Responsive Design** – Fully functional across all screen sizes.  

---

## 🛠 **Tech Stack**  

- **Frontend:** HTML, CSS, JavaScript, React.js, Redux Toolkit, Material UI, React Router
- **State Management:** Redux  
- **API Handling:** Axios  
- **Styling:** CSS Modules  
- **Build Tool:** Vite (for fast development)  

---
## 📷 **Project Snapshots** 

![image](https://github.com/user-attachments/assets/49e288b2-d3eb-42d8-94a8-56eec8afb670)
![image](https://github.com/user-attachments/assets/432b439d-3ac9-4d37-8ebd-f2328a452eae)
![image](https://github.com/user-attachments/assets/bd0ca628-f6de-4c75-aea2-22036836df28)
![image](https://github.com/user-attachments/assets/00298e5d-fbb5-43e5-af50-b4792f6d2c7e)
![image](https://github.com/user-attachments/assets/a4ffca5a-3a9d-4c41-aeb6-f8b6b0bbd630)
![image](https://github.com/user-attachments/assets/264e177c-1c2f-4cbf-a24f-7687c0938c89)
![image](https://github.com/user-attachments/assets/492c26a8-03ee-49f4-9851-6bb869e98fd0)

![image](https://github.com/user-attachments/assets/b40499e0-e1af-4fba-b365-49ecfe42b229)

![image](https://github.com/user-attachments/assets/b00b767b-278d-4e4a-804f-40be798af0d7)

![image](https://github.com/user-attachments/assets/116fd2bd-5aeb-4753-a003-c1dc2ebb3f76)

![image](https://github.com/user-attachments/assets/a83f4734-c568-411d-bf76-d6401c110749)

![image](https://github.com/user-attachments/assets/36dd0a05-1442-4fb2-a77f-99fce240f03f)

![image](https://github.com/user-attachments/assets/4aff3a6f-2737-45be-b686-69f7010a92b4)

![image](https://github.com/user-attachments/assets/a75ec1b3-adf3-46f8-baea-14da907215c6)

![image](https://github.com/user-attachments/assets/a96797c3-b151-40b2-8518-6c6de770055a)

![image](https://github.com/user-attachments/assets/49101c06-a772-46b4-8afe-10c6c68dc8bc)

![image](https://github.com/user-attachments/assets/c4ebedbd-0550-49ce-be51-d81377d2fc91)

![image](https://github.com/user-attachments/assets/c6d7db96-0328-43d4-bfc5-14a49913a10b)

![image](https://github.com/user-attachments/assets/41f337af-66d2-4fed-8632-ffda060b33b6)

![image](https://github.com/user-attachments/assets/aed1b63e-9055-455a-8c91-6fee9c1d4f1f)





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
