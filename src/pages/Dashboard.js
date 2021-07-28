import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    const [isDisplay, setIsDisplay] = useState(false);
    let todoList = [
        {
            name: "Lifecycle and Props State",
            status: true
        },
        {
            name: "HandleEvent Key Mouse Form submit",
            status: true
        },
        {
            name: "Conditonal Rendering",
            status: true
        },
        {
            name: "Lifting State Up",
            status: false
        },
    ];
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
                    <div className={isDisplay === true ? ("col-xs-4 col-sm-4 col-md-4 col-lg-4") : ('')}>
                        {
                            isDisplay === true ? (
                                <div className="panel panel-warning">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Add new task</h3>
                                    </div>
                                    <div className="panel-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Name :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <label>Status :</label>
                                            <select className="form-control" required="required">
                                                <option value="1">learned</option>
                                                <option value="0">studying</option>
                                            </select>
                                            <br />
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                                                <button type="submit" className="btn btn-danger">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ) : ('')
                        }
                    </div>
                    <div className={isDisplay === true ? ('col-xs-8 col-sm-8 col-md-8 col-lg-8') : ('col-xs-12 col-sm-12 col-md-12 col-lg-12')}>
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
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">STT</th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todoList.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link to={item.name.replace(/ /g, "-")}>{item.name}</Link>
                                                    </td>
                                                    <td className="text-center">
                                                        {
                                                            item.status === true ? (
                                                                <span className="label label-success">
                                                                    learned
                                                                </span>
                                                            ) : (
                                                                <span className="label label-danger">
                                                                    studying
                                                                </span>
                                                            )
                                                        }

                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-warning">
                                                            <span className="fa fa-pencil"></span>Edit
                                                        </button>
                                                        &nbsp;
                                                        <button type="button" className="btn btn-danger">
                                                            <span className="fa fa-trash"></span>Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;