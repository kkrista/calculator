import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: this.state.input + val });
    }
  };

  handleEqual = () => {
    if (isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: math.evaluate(this.state.input) });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <span>Calculator</span>
          <Input input={this.state.input}></Input>
          <div className="row">
            <div className="col-3">
              <ClearButton handleClear={() => this.setState({ input: "" })}>
                AC
              </ClearButton>
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>0</Button>
            </div>
            <div className="col-3">
              <Button handleClick={this.addToInput}>/</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>.</Button>
            </div>
            <div className="col-3">
              <Button handleClick={this.addToInput}>*</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={() => this.handleEqual()}>=</Button>
            </div>
            <div className="col-3">
              <Button handleClick={this.addToInput}>+</Button>
              <Button handleClick={this.addToInput}>-</Button>
            </div>
          </div>
          {/* This project was coded by
      <a
        href="https://www.linkedin.com/in/kristamarikatajisto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Krista-Mari Katajisto
      </a>
      and is
      <a
        href="https://github.com/kkrista/calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>
      and
      <a
        href="https://celebrated-croissant-e3f2c2.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a> */}
        </div>
      </div>
    );
  }
}

export default App;