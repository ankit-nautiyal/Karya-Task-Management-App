import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState= {
//     todos: [{ id: nanoid(), task: "", isDone: false}],
// };

// Load saved tasks from localStorage or set an empty array as default
const loadTodosFromStorage = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];  // Ensure todos have valid structure
};

// Initial state now loads from localStorage and ensures `todos` array is correctly formatted
const initialState = {
    todos: loadTodosFromStorage(),
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
                priority: "Medium", // Default priority
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
            }
            localStorage.setItem("todos", JSON.stringify(state.todos)); // Update localStorage
        },



        setPriority: (state, action) => {
            const { id, priority } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.priority = priority;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
    }
});

export const {addTodo, deleteTodo, markAsDone, setPriority} = taskSlice.actions;
export default taskSlice.reducer;