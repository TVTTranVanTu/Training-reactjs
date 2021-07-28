import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskItem extends Component {
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }
    onRemove = () => {
        this.props.onRemove(this.props.task.id);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    <Link to={task.name.replace(/ /g, "-")}>{task.name}</Link>
                </td>
                <td className="text-center">
                    {
                        task.status === true ? (
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
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdate}>
                        <span className="fa fa-pencil"></span>Edit
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onRemove}>
                        <span className="fa fa-trash"></span>Remove
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;