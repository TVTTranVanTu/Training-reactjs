import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    onCloseForm() {
        this.props.onCloseForm();
    };

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    };

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Edit task
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}>
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                className="form-control"
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Status :</label>
                        <select
                            className="form-control"
                            value={this.state.status}
                            required="required"
                            name="status"
                            onChange={this.onChange}
                        >
                            <option value={true}>learned</option>
                            <option value={false}>studying</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Edit</button>&nbsp;
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditForm;