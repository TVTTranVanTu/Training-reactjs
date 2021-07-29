import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        var { tasks } = this.props;
        return (
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
                        tasks.map((task, index) => (
                            <TaskItem
                                key={task.id}
                                index={index}
                                task={task}
                                onRemove={this.props.onRemove}
                                onUpdate={this.props.onUpdate}
                            />
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default TaskList;