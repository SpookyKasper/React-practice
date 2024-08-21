import { Component, Fragment } from "react";
import React from "react";
import Count from "./Count";
import Todo from "./Todo";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDeleteItem(e) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo != e.target.id),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo}
              todo={todo}
              handleDeleteItem={this.handleDeleteItem}
              updateTodo={this.updateTodo}
              onChange={this.handleInputChange}
            />
          ))}
        </ul>
        <Count count={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
