import { createSlice, nanoid } from '@reduxjs/toolkit';


// Load saved tasks from localStorage or set an empty array as default
const loadTodosFromStorage = () => {
    try {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : []; 
    } catch (error) {
        console.error("Error loading todos from localStorage:", error);
        return []; // Return empty array to prevent app crash
    }
};

// Initial state now loads from localStorage and ensures `todos` array is correctly formatted
const initialState = {
    todos: loadTodosFromStorage(),
    filterOption: "default", // Default filter option
};



export const taskSlice= createSlice({
    name: "todo",
    initialState,
    reducers: {          //(currState, action)-> newState
        addTodo: (state, action) =>{
            const newTodo= {
                id: nanoid(),
                task: action.payload,
                isDone: false, 
                priority: null,  // Default no priority (white button)
                status: "todo",  // Default status is "To-Do"
                createdAt: new Date().toISOString() // Store timestamp
            }
            state.todos.push(newTodo); //direct mutation using redux toolkit
            localStorage.setItem("todos", JSON.stringify(state.todos)); // Save to localStorage
        },

        deleteTodo: (state, action) =>{
            state.todos= state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos)); // Update localStorage
        },

        markAsDone: (state, action) =>{
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone;  // Toggle true/false
                todo.status = todo.isDone ? "done" : "todo"; // Sync status
                localStorage.setItem("todos", JSON.stringify(state.todos)); // Update localStorage
            }
            
        },

        editTodo: (state, action) =>{
            const currTodo = state.todos.find((todo) => todo.id === action.payload);

            if (currTodo) {
                let newTodo = prompt("Edit your task:", currTodo.task); // Open prompt with pre-filled task

                if (newTodo === null) return; // If user cancels, exit function

                if (newTodo.trim() === "") {         // Prevents empty input
                    alert("Task cannot be empty!");
                    return;
                }

                currTodo.task= newTodo;
                localStorage.setItem("todos", JSON.stringify(state.todos)); // Update localStorage
            }
        },


        setPriority: (state, action) => {
            const { id, priority } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.priority = priority;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },

        updateTodoOrder: (state, action) => {
            if (JSON.stringify(state.todos) !== JSON.stringify(action.payload)) { 
                state.todos = action.payload;  
                localStorage.setItem("todos", JSON.stringify(state.todos));  
            }
        },

        setStatus: (state, action) => {
            const { id, status } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.status = status;
                todo.isDone = status === "done" ? true : false;  // Sync isDone with status
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },

        setFilterOption: (state, action) => {
            state.filterOption = action.payload;  
        },
        
    }
});

export const {addTodo, deleteTodo, markAsDone, editTodo, setPriority, updateTodoOrder, setStatus, setFilterOption} = taskSlice.actions;
export default taskSlice.reducer;