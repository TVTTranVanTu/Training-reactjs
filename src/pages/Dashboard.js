import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    let todoList = ["Lifecycle and Props State", "HandleEvent, Key, Mouse, Form submit", "Conditonal Rendering"];
    return (
        <div className="welcome">
            <h1>Enclave's Bootcamp Training Program</h1>
            <h2>Reactjs-Training</h2>
            <h3>Todo list</h3>
            <ul>
                {
                    todoList.map((item, index) => (
                        <li key={index}>
                            <Link to={item}>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Dashboard;