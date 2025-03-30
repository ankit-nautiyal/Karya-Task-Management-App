import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone, editTodo, updateTodoOrder, addTodo, setStatus } from "../features/taskSlice.jsx";
import { setPriority } from "../features/taskSlice.jsx";
import TaskInput from "./TaskInput.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useEffect, useState, useMemo, useCallback } from "react";
import WeatherInfo from "./WeatherInfo.jsx";
import { clearWeatherError } from "../features/weatherSlice.jsx";
import { fetchWeather } from "../api/weatherAPI.js";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from '../styles/TaskList.module.css';


const outdoorKeywords = ["swim", "walk", "run", "office", "school", "college", "shopping", "market", "meet", "go", "drive", "gym", "attend"]; //can be updated later

    
export default function TaskList(){

    const todos= useSelector((state) => state.todo.todos);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const city = useSelector((state) => state.auth.city);  // Get user city from Redux store
    const weather = useSelector((state) => state.weather?.data);  // to handle undefined case also
    const weatherError = useSelector((state) => state.weather?.error);  // Get weather error
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

    const handleDelete = useCallback((id) => {
        if (confirm("Do you really want to delete this task?")) {
            dispatch(deleteTodo(id));
        }
    }, [dispatch]);  // Only changes if dispatch changes
    



    const handleMarkAsDone= (id)=>{
        dispatch(markAsDone(id));
    }


    const handleEdit= (id) =>{
        dispatch(editTodo(id));
    }


    const handlePriorityChange = (id, priority) => {
        dispatch(setPriority({ id, priority }));
    };

    //  Sorting tasks based on priority
    const sortedTodos = useMemo(() => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return [...todos].sort((a, b) => (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4));
    }, [todos]);  // Recomputes only when todos change
    
    

    const handleDragEnd = useCallback((result) => {
        if (!result.destination) return;  // If dropped outside, do nothing
    
        const reorderedTodos = [...todos];
        const [movedTodo] = reorderedTodos.splice(result.source.index, 1);
        reorderedTodos.splice(result.destination.index, 0, movedTodo);
    
        dispatch(updateTodoOrder(reorderedTodos)); // Update Redux store

        // Persist the new order to localStorage
        localStorage.setItem("todos", JSON.stringify(reorderedTodos));
    }, [todos, dispatch]);  // Only re-created if todos or dispatch changes

    const handleStatusChange = (id, status) => {
        dispatch(setStatus({ id, status }));
    };
    
    

    return(
        <>  
            <Navbar/>
            
            <div className={styles.taskListContainer}>
                <TaskInput/>

                {outdoorTaskDetected && weather && <WeatherInfo weather={weather} error={weatherError && "Invalid city name!"} />}

                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="todoList">

                        {(provided) => (

                            <ol className={styles.taskList} {...provided.droppableProps} ref={provided.innerRef}>
                                {todos.map((todo, index) => ( 
                                    
                                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={styles.taskItem}>
                                            
                                                <FormControlLabel 
                                                    control={<Checkbox  color="success" onChange={() => handleMarkAsDone(todo.id)} checked={todo.isDone} />}
                                                    label={<span className={todo.isDone ? styles.done : ""}> {todo.task} </span> } 
                                                />
                                                
                                                <hr />

                                                <div  className={styles.taskButtons}>
                                                    <Button className={styles.editBtn} variant="outlined" onClick={() => handleEdit(todo.id)}> 📝Edit</Button>
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

                                                {/* Status Selection Buttons */}
                                                <div className={styles.statusBtns}>

                                                    <Button 
                                                        variant="contained" 
                                                        style={{ color: "black", backgroundColor: todo.status === "in-progress" ? "#FFD700" : "white" }}
                                                        onClick={() => handleStatusChange(todo.id, "in-progress")}
                                                    >
                                                        In-Progress
                                                    </Button>

                                                    <Button 
                                                        variant="contained" 
                                                        style={{ color: "black", backgroundColor: todo.status === "todo" ? "#ADD8E6" : "white" }}
                                                        onClick={() => handleStatusChange(todo.id, "todo")}
                                                    >
                                                        To-Do
                                                    </Button>
                                                
                                                    <Button 
                                                        variant="contained" 
                                                        style={{ color: "black", backgroundColor: todo.status === "done" ? "#90EE90" : "white" }}
                                                        onClick={() => handleStatusChange(todo.id, "done")}
                                                    >
                                                        Done
                                                    </Button>
                                                </div>
                                        
                                            </li>
                                        )}
                                        
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ol>
                        )}

                    </Droppable>
                </DragDropContext>
            </div>  

        <Footer/>
        </>
    );
}