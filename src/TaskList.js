import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
      toDos: ['clean car', 'fold clothes', 'buy groceries', 'pick up kids', 'watch \'Stranger Things\' season 3']
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ list: value }) //grab the input and set it to state as value
    console.log(value);
  }

  handleClick(e) {
    this.state.toDos.push(this.state.list); //grabs value of text
    console.log(this.state.toDos, 'ADDED?');
    this.setState({ list: '' }); //reset state to post value on click
    e.preventDefault();
}

  render() {
    return (
      <div>
        <h1>Things To Do</h1>
        <form>
          <input onChange={this.handleChange} type="text" placeholder="add tasks" style={styles.inputStyle} />
          <button type="button" onClick={this.handleClick}>add</button>
        </form>

        <ul>
            {this.state.toDos.map((list, index) => {
              return <li key={index} value={list}>{list}</li>
            })}
        </ul>

      </div>
    );
  }
}

var styles = {
  inputStyle: {
    width: '260px',
    height: '20px',
    fontSize: '16px'

  }
}
export default App;