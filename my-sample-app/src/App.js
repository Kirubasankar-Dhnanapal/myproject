import React, { Component } from 'react';
import './App.css';
let inputList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      name: ''
    }
    this.addItem = this.addItem.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  addItem(event) {
    inputList.push(this.state.name);
    this.setState({
      inputValue: inputList
    });
  }

  getInput(event) {
    event.target.name = event.target.value;
    this.setState({
      name: event.target.name
    });
  }

  render() {
    return (
      <div>
        <div style={{
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2',
          transition: '0.3s', marginLeft: 265,
          width: '40%', height: 400
        }}>
          <div style={{ marginTop: '40' }}>
            <h5 style={{ borderBottom: '1px solid', marginTop: 20 }}>ADDITEM</h5>
            <input type='text' name='input' onChange={this.getInput} style={{ marginLeft: '5%' }} />
            <input type='button' label={'ADD'} onClick={(event) => this.addItem(event)} style={{ marginLeft: '15%' }} />
          </div>
          <h5 style={{ borderBottom: '1px solid', marginTop: 40 }}>TODO</h5>
          <input type='checkbox' />
          <div style={{ marginTop: -23, marginLeft: '5%' }}>{this.state.inputValue}</div>
          <div style={{ marginTop: -20, marginLeft: '20%' }}>
            <input type='button' value='Edit' style={{ marginLeft: '39%' }} />
            <input type='button' value='Delete' style={{ marginLeft: '15%' }} /></div>
          <h5 style={{ borderBottom: '1px solid', marginTop: 40 }}>COMPLETED</h5>
          <input type='checkbox' />
          <div style={{ marginTop: -23, marginLeft: '6%' }}>
            See the Doctor
          </div>
          <div style={{ marginTop: -20, marginLeft: '42%' }}>
            <input type='button' value='Edit' style={{ marginLeft: '15%' }} />
            <input type='button' value='Delete' style={{ marginLeft: '20%' }} /></div>
        </div>
      </div>
    );
  }
}

export default App;
