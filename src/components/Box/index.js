import React, { Component } from "react";
import { Boxs, Section } from "./styles";
import { TitleBoxs } from "../Title/styles";
import Form from "../Form";
import Tasks from "../Tasks";

export default class BoxComponents extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newTask: "",
    task: [],
    index: -1,
  };

  componentDidMount() {
    const task = localStorage.getItem("task");
    if (task) {
      this.setState({ task: JSON.parse(task) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { task } = this.state;
    if (task === prevState.task) return;
    localStorage.setItem("task", JSON.stringify(task));
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, index } = this.state;
    let { newTask } = this.state;
    if (newTask === "") return;
    newTask = newTask.trim();
    if (task.indexOf(newTask) !== -1) return;
    const novastask = [...task];
    if (index === -1) {
      this.setState({ task: [...novastask, newTask], newTask: "" });
    } else {
      novastask[index] = newTask;
      this.setState({ task: [...novastask], index: -1 });
    }
  };

  handleEdit = (e, index) => {
    const { task } = this.state;
    this.setState({ index, newTask: task[index] });
  };

  handleDelete = (e, index) => {
    const { task } = this.state;
    const novastask = [...task];
    novastask.splice(index, 1);
    this.setState({ task: [...novastask] });
  };

  render() {
    const { newTask, task } = this.state;
    return (
      <main>
        <Section>
          <Boxs>
            <TitleBoxs> to do </TitleBoxs>
            <Form
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              newTask={newTask}
            />
            <Tasks
              task={task}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </Boxs>
          <Boxs>
            <TitleBoxs> in progress</TitleBoxs>

          </Boxs>
          <Boxs>
            <TitleBoxs> designed</TitleBoxs>
          </Boxs>
        </Section>
      </main>
    );
  }
}
