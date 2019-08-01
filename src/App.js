import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      selectedText: [],
      results: [],
      tasks: [
        "Clean the Car",
        "Clean the house",
        "Clean the bedroom",
        "Clean the dishes",
        "Walk the dog",
        "Walk with grandma",
        "Walk the plank",
        "Buy groceries",
        "Buy toiletries",
        "Buy beers"
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  //NEED TO INCORPORATE
  getSuggestions(prefix) {
  const result = Array
    .from(new Array(10), function (x, i) {
      console.log('hello')
      return i;
    })
    .map(function (x) {
      return prefix + '_mock_' + x;
    });
  const delay = Math.random() * 800 + 200; // delay 200~1000ms
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay, result);
  });
}

  handleChange(e) {
    const value = e.target.value
    console.log(this.state.selectedText, 'hello')
    this.setState({
      searchString: value,
    });
  }

  handleClick(e) {
    const result = [e];
    this.state.results.push(result)
    this.setState({
      selectedText: result,
    });
 }

 clearList(e) {
   this.setState({ results: []})
 }

  render() {
    let tasks = this.state.tasks;
    let results = this.state.results;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      tasks = tasks.filter(function (user) {
        return user.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <h1>Create Tasks List</h1>
        <h5>Below we have some suggestions...</h5>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="search suggestions"
          />
          <ul>
            {tasks.map((item, index) => {
              return (
                <li
                  className="suggestions"
                  key={index}
                  onClick={() => this.handleClick(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <h2>Things To Do</h2>
          <ul>
            {results.map((item, index) => {
              return (
                <li
                  key={index}
                >
                  {item}
                </li>
              );
            })}
            <button onClick={() => this.clearList()}>Clear List</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;