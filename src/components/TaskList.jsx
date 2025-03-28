import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone } from "../features/taskSlice.jsx";
import { setPriority } from "../features/taskSlice.jsx";
import TaskInput from "./TaskInput.jsx";
import { logout } from "../features/authSlice.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo.jsx";
import { clearWeatherError } from "../features/weatherSlice.jsx";
import { fetchWeather } from "../api/weatherAPI.js";
import styles from '../styles/TaskList.module.css';

const outdoorKeywords = ["swim", "walk", "run", "office", "school", "college", "shopping", "market", "meet", "go", "drive", "gym", "attend"]; //can be updated later

    
export default function TaskList(){
    console.log("TaskList component rendered!");
    const todos= useSelector((state) => state.todo.todos);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const city = useSelector((state) => state.auth.city);  // Get user city from Redux store
    const weather = useSelector((state) => state.weather?.data);  // to handle undefined case also
    const weatherError = useSelector((state) => state.weather?.error);  // Get weather error
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const [outdoorTaskDetected, setOutdoorTaskDetected] = useState(false);


    
    // To ennsure Redux store is in sync with localStorage when the app starts
    useEffect(() => {
        if (todos.length === 0) {
            const savedTodos = localStorage.getItem("todos");
            if (savedTodos) {
                JSON.parse(savedTodos).forEach(todo => dispatch(addTodo(todo.task)));
            }
        }
    }, []);  // Runs only once on first render

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

         // Save authentication status to localStorage
        localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }, [todos, isAuthenticated]);

    
    //  Check if there's any outdoor task & fetch weather
    useEffect(() => {
        console.log("Checking for outdoor tasks...");
        if (!city) {
            console.log("City is missing! Weather fetch skipped.");
            return;
        };  

        const hasOutdoorTask = todos.some(todo =>
            outdoorKeywords.some(keyword => todo.task.toLowerCase().includes(keyword))
        );

        console.log("Has Outdoor Task:", hasOutdoorTask);

        if (hasOutdoorTask && city) {
            console.log(`Fetching weather for city: ${city}`); // Debugging log
            dispatch(fetchWeather(city));
            setOutdoorTaskDetected(true);
        } else {
            setOutdoorTaskDetected(false);
            dispatch(clearWeatherError());  // Clear error if no outdoor task
        }
    }, [todos, city]);

    


    const handleDelete= (id)=>{
        let dltConfirm= confirm("Do you really want to delete this task?")

        if (dltConfirm) {
            dispatch(deleteTodo(id));
        }
    }

    const handleMarkAsDone= (id)=>{
        dispatch(markAsDone(id));
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth");
    };

    const handlePriorityChange = (id, priority) => {
        dispatch(setPriority({ id, priority }));
    };

    //  Sorting tasks based on priority
    const sortedTodos = [...todos].sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4);
    });

    // console.log("Weather Data in TaskList.jsx:", weather); // Debugging log
    

    return(
        <div className={styles.taskListContainer}>
            <Button variant="contained" onClick={handleLogout} sx={{position: 'absolute', top: 0, right: 0, margin: '15px'}}> Logout</Button>

            <h2 className={styles.taskListTitle}>Task Manager App</h2>
            <TaskInput/>

            {outdoorTaskDetected && weather && <WeatherInfo weather={weather} error={weatherError && "Invalid city name!"} />}

            <ol className={styles.taskList}>
                {sortedTodos.map((todo) => (
                    <li key={todo.id} className={styles.taskItem}>

                        <span className={todo.isDone ? styles.done : ""}> {todo.task} </span> 
                        <hr />

                        <div  className={styles.taskButtons}>
                            <Button className={styles.dneBtn} variant="outlined" onClick={() => handleMarkAsDone(todo.id)}> ✅Done</Button>
                            <Button className={styles.dltBtn} variant="outlined" onClick={() => handleDelete(todo.id)}> ❌Delete</Button>
                        </div>
                        
                        

                        {/* Priority Selection Buttons */}

                        <div className={styles.priorityBtns}>
                            <Button 
                                variant="contained" 
                                style={{ color:" black", backgroundColor: todo.priority === "High" ? "red" : "white" }}
                                onClick={() => handlePriorityChange(todo.id, "High")}
                            >
                                High
                            </Button>

                            <Button 
                                variant="contained" 
                                style={{ color:" black", backgroundColor: todo.priority === "Medium" ? "orange" : "white" }}
                                onClick={() => handlePriorityChange(todo.id, "Medium")}
                            >
                                Medium
                            </Button>

                            <Button 
                                variant="contained" 
                                style={{ color:" black", backgroundColor: todo.priority === "Low" ? "green" : "white" }}
                                onClick={() => handlePriorityChange(todo.id, "Low")}
                            >
                                Low
                            </Button>
                        </div>
                    
                    </li>
                ))}
            </ol>
        </div>  
    );
}