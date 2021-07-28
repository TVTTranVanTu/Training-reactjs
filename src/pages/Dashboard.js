import React, { useEffect, useState } from 'react';
import EditForm from '../components/EditForm';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Dashboard(props) {
    const [isDisplay, setIsDisplay] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Lifecycle and Props State",
            status: true
        },
        {
            id: 2,
            name: "HandleEvent Key Mouse Form submit",
            status: true
        },
        {
            id: 3,
            name: "Conditonal Rendering",
            status: true
        },
        {
            id: 4,
            name: "Lifting State Up",
            status: false
        },
    ]);
    const [taskEdit, setTaskEdit] = useState(null);


    const onSubmit = (data) => {
        console.log(data);
        if (!data.id) {
            data.id = tasks.length + 1;
            let copy = [...tasks];
            copy = [...copy, data];
            setTasks(copy);
        } else {
            tasks[data.id - 1] = data;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));

        onCloseForm();
    }
    const onCloseForm = () => {
        setIsDisplay(false);
        setIsEditForm(false);
    }
    const onRemove = (id) => {
        tasks.splice(id - 1, 1);
        var a = [...tasks];
        setTasks(a);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    const onUpdate = (id) => {
        var a = tasks[id - 1];
        setIsEditForm(true);
        setIsDisplay(false);
        setTaskEdit(a);
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
    return (
        <div className="welcome">
            <h1 className="text-center">Enclave's Bootcamp Training Program</h1>
            <h2 className="text-center">Reactjs-Training</h2>
            <div className="container">
                <div className="text-center">
                    <h1>Workflow Management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplay === true | isEditForm === true ? ("col-xs-4 col-sm-4 col-md-4 col-lg-4") : ('')}>
                        {
                            isDisplay === true ? (
                                <TaskForm onCloseForm={onCloseForm} onSubmit={onSubmit} />
                            ) : isEditForm === true ? (
                                <EditForm onCloseForm={onCloseForm} onSubmit={onSubmit} task={taskEdit} />
                            ) : ('')
                        }
                    </div>
                    <div className={isDisplay === true | isEditForm === true ? ('col-xs-8 col-sm-8 col-md-8 col-lg-8') : ('col-xs-12 col-sm-12 col-md-12 col-lg-12')}>
                        <div className="row mt-15 mb-15">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter the task..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <span className="fa fa-search"></span>Search
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <button type="button" className="btn btn-primary" onClick={() => setIsDisplay(true)}>
                                    <span className="fa fa-plus"></span>Add new task
                                </button>
                            </div>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
                                    tasks={tasks}
                                    onUpdate={onUpdate}
                                    onRemove={onRemove} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;