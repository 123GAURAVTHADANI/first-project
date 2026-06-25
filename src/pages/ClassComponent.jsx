import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("hello !!!!");
  }
  render() {
    return <h1>Hello, World!!!</h1>;
  }
}

export default ClassComponent;
