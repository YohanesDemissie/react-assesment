import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      suggestions: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({ input: value });
    console.log(value);
  }


  render() {
    return(
      <div>
        <input onChange={this.handleChange} placeholder="search" style={styles.inputStyle} />
      </div>
    )
  }
}

const styles = {
  inputStyle: {
    marginTop: '30px',
    marginLeft: '15px',
    width: '400px',
    height: '50px',
    fontSize: '30px'
  }
}

export default App;