import React from 'react';
import TaskList from '../components/TaskList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

function Home() {

    const todos= useSelector((state) => state.todo.todos);

    return (
        <div>
            <Navbar todos={todos} />

            <TaskList/>

            <Footer/>
        </div>
    )
}

export default Home;