import { Component } from "react";
import React from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdditing: false,
      inputVal: this.props.todo,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleEdit() {
    this.setState((state) => ({
      isEdditing: true,
    }));
  }

  todoContent() {
    if (this.state.isEdditing) {
      return (
        <>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button id={this.props.todo} onClick={this.props.handleDeleteItem}>
            X
          </button>
          <button id={this.props.todo} onClick={this.handleEdit}>
            Resubmit
          </button>
        </>
      );
    } else {
      return (
        <>
          <li>{this.props.todo}</li>
          <button id={this.props.todo} onClick={this.props.handleDeleteItem}>
            X
          </button>
          <button id={this.props.todo} onClick={this.handleEdit}>
            Edit
          </button>
        </>
      );
    }
  }
  render() {
    return <>{this.todoContent()}</>;
  }
}

export default Todo;
