import Button from '@mui/material/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/taskSlice"
import { TextField } from '@mui/material';
import styles from '../styles/TaskInput.module.css';
import AddIcon from '@mui/icons-material/Add';
import { toast } from "react-toastify";


export default function TaskInput(){
    const [task, setTask] = useState("");
    const dispatch= useDispatch();

    const handleSubmit= (event)=>{
        event.preventDefault();
        if (task.trim() !== "") {
            dispatch(addTodo(task));
            setTask("");
        } else {
            toast.error("Task cannot be empty!");
        }
    }

    return(
        <div className={styles.taskInputContainer}>
            <form onSubmit={handleSubmit} className={styles.taskForm}>
                <TextField  className={styles.taskInput}  required type="text" placeholder="Enter your task " value={task} onChange={(event)=> setTask(event.target.value)}></TextField>
                <Button variant="contained" onClick={handleSubmit}>Add Task <AddIcon/> </Button>
            </form>
        </div>
    );
}