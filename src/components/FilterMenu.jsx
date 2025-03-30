import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoOrder } from "../features/taskSlice.jsx";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function FilterMenu({ todos, setFilteredTodos }) {
    const dispatch = useDispatch();
    const [filterOption, setFilterOption] = useState("default");

    const handleFilterChange = (event) => {
        const option = event.target.value;
        setFilterOption(option);

        let filteredList = [...todos];

        switch (option) {
            case "latest-first":
                filteredList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;

            case "oldest-first":
                filteredList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;

            case "high-low":
                filteredList.sort((a, b) => (a.priority === "High" ? -1 : 1));
                break;

            case "low-high":
                filteredList.sort((a, b) => (a.priority === "Low" ? -1 : 1));
                break;

            case "todo":
            case "in-progress":
            case "done":
                filteredList = filteredList.filter((todo) => todo.status === option);
                break;

            default:
                filteredList = todos;
        }

        setFilteredTodos(filteredList);
        dispatch(updateTodoOrder(filteredList));
    };

    return (
        <FormControl variant="filled" >
            <InputLabel sx={{color: 'white'}}>Filter & Sort</InputLabel>
            <Select value={filterOption} onChange={handleFilterChange} label="Filter & Sort">
                <MenuItem value="default">Default Order</MenuItem>
                <MenuItem value="latest-first">Newest First</MenuItem>
                <MenuItem value="oldest-first">Oldest First</MenuItem>
                <MenuItem value="todo">To-Do</MenuItem>
                <MenuItem value="in-progress">In Progress</MenuItem>
                <MenuItem value="done">Done</MenuItem>
                <MenuItem value="high-low">High to Low Priority</MenuItem>
                <MenuItem value="low-high">Low to High Priority</MenuItem>
            </Select>
        </FormControl>
    );
}
