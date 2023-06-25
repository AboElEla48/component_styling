
import './App.css';
import React, {Component} from 'react';

const LOG_TAG = 'App: ';

class App extends Component {
  colors = ['green', 'red'];
  colorIndex = 0;

  classStyles = ['txtRed txtBold', 'txtGreen txtNormal'];

  state = {
    myStyle: {
      border: '3px solid black',
      marginTop: '5px',
      borderColor: 'black',
      color: 'white',
      backgroundColor: 'green'
    },
    paragraphStyles: { name: 'txtRed txtBold'}

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
    let paragraphStyles= {...this.state.paragraphStyles};

    myStyle.backgroundColor = this.colors[this.colorIndex];
    paragraphStyles.name = this.classStyles[this.colorIndex];

    this.logMSG('New Button Style: ', myStyle);
    this.setState({myStyle});

    this.logMSG('New Paragraph Style: ', paragraphStyles.name);
    this.setState({paragraphStyles});
  }

  render (){
    let btnStyle = {...this.state.myStyle};
    let paragraphStyle = {...this.state.paragraphStyles};

    this.logMSG('Render Button style: ', btnStyle);
    this.logMSG('Render Paragraph style: ', paragraphStyle.name);

    return (
      <div className="App">
        <button
          style={btnStyle}
          onClick= {this.buttonClickHandler}> Toggle Styles!</button>

        <p className={paragraphStyle.name}>
          This is some text to change style from CSS.
        </p>
      </div>
    );
  }
}

export default App;
