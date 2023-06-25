
import './App.css';
import React, {Component} from 'react';

const LOG_TAG = 'App: ';

class App extends Component {
  colors = ['green', 'red'];
  colorIndex = 0;

  state = {
    myStyle: {
      border: '3px solid black',
      marginTop: '5px',
      borderColor: 'black',
      color: 'white',
      backgroundColor: 'green'
    }
  };

  /** Log messages to console */
  logMSG = (msg, obj) => {
      console.log(LOG_TAG + msg);
      if(obj != null) {
          console.log(obj);
      }
  }


  buttonClickHandler = () => {
    this.logMSG('buttonClickHandler');

    this.colorIndex = ++this.colorIndex % 2;
    this.logMSG(this.colorIndex);
    let myStyle = {...this.state.myStyle};

    myStyle.backgroundColor = this.colors[this.colorIndex];
    this.logMSG('New Style: ', myStyle);
    this.setState({myStyle});
  }

  render (){
    this.logMSG('Render style: ', this.state.myStyle);
    let btnStyle = {...this.state.myStyle};

    return (
      <div className="App">
        <button
          style={btnStyle}
          onClick= {this.buttonClickHandler}> Turn to Red!</button>
      </div>
    );
  }
}

export default App;
