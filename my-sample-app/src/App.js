import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';
let inputList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      name: '',
      pageChange:0
    }
    this.stateChange = this.stateChange.bind(this);
  }

  stateChange(){
    console.log(this.state.pageChange)
    this.setState({
      pageChange:1
    });
    inputList.push(this.state.name)
  }

  render() {
    return (
      <div>
        <div style={{
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2',
          transition: '0.3s', marginLeft: 265,
          width: '40%', height: 400,marginTop:'10%'
        }}>
        {this.state.pageChange === 0 ? <div>
        <AppBar position="static">
          <Button color="inherit">Welcome</Button>
      </AppBar>
      <TextField style={{marginLeft:150}}
          id="standard-name"
          label="Name"
          margin="normal"
        />
        <TextField style={{marginLeft:150}}
          id="password"
          type="password"
          label="Password"
          margin="normal"
        />
        <Button variant="contained" onClick={()=>this.stateChange()} style={{marginTop:'10%',marginLeft:'40%'}}>
        Login
        </Button> </div>: <div>
        <h6>{[...inputList]}</h6>
        </div> }
      {/* {this.state.pageChange===1 ? <h1>successfully entered</h1> : null} */}
          {/* <div style={{ marginTop: '40' }}>
            <h5 style={{ borderBottom: '1px solid', marginTop: 20 }}>ADDITEM</h5>
            <input type='text' name='input' onChange={this.getInput} style={{ marginLeft: '5%' }} />
            <input type='button' label={'ADD'} onClick={(event) => this.addItem(event)} style={{ marginLeft: '15%' }} />
          </div> */}
          {/* <h5 style={{ borderBottom: '1px solid', marginTop: 40 }}>TODO</h5>
          <input type='checkbox' />
          <div style={{ marginTop: -23, marginLeft: '5%' }}>{this.state.inputValue}</div>
          <div style={{ marginTop: -20, marginLeft: '20%' }}>
            <input type='button' value='Edit' style={{ marginLeft: '39%' }} />
            <input type='button' value='Delete' style={{ marginLeft: '15%' }} /></div>
          <h5 style={{ borderBottom: '1px solid', marginTop: 40 }}>COMPLETED</h5>
          <input type='checkbox' /> */}
          {/* <div style={{ marginTop: -23, marginLeft: '6%' }}>
            See the Doctor
          </div> */}
          {/* <div style={{ marginTop: -20, marginLeft: '42%' }}>
            <input type='button' value='Edit' style={{ marginLeft: '15%' }} />
        <input type='button' value='Delete' style={{ marginLeft: '20%' }} /></div>*/}
        </div>  
        
      </div>
    ); 
  }
}

export default App;
