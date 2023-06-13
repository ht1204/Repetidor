import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repetir: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      repetir: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          placeholder="Empieza a escribir algo"
          value={this.state.repetir}
          onChange={this.handleInputChange}
        />
        <p className="repeater">
          {this.state.repetir}
        </p>
      </div>
    );
  }
}

export default App;
