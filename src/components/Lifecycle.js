import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "everyone",
            color: "deeppink"
        };
        this.changeState = this.changeState.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
    }
    componentWillMount() {
        console.log("ComponentWillMount");
    }
    componentDidMount() {
        console.log("ComponentDidMOunt");
    }
    getRandomColor() {
        const COLOR_LIST = ["white", "deeppink", "green", "yellow", "black", "blue", "reed"];
        const randomIndex = Math.trunc(Math.random() * 7);
        return COLOR_LIST[randomIndex];
    }
    changeState() {
        const newColor = this.getRandomColor();
        this.setState({
            hello: "Lewis",
            color: newColor
        })
    }
    render() {
        return (
            <div className="app" style={{ backgroundColor: this.state.color }}>
                <h1>State and lifecycle in Reactjs</h1>
                <h2>hello {this.state.hello}</h2>
                <button onClick={this.changeState}>Click me!</button>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}

export default Lifecycle;