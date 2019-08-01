import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      selectedText: [],
      results: [],
      suggestions: []
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  getSuggestions(prefix) {
    console.log('HELLO')
  const result = Array
    .from(new Array(10), function (x, i) {
      return i;
    })
    .map(function (x) {
      const tasks = [
        "Clean the Car",
        "Clean the house",
        "Clean the bedroom",
        "Clean the dishes",
        "Walk the dog",
        "Walk with grandma",
        "Walk the plank",
        "Buy groceries",
        "Buy toiletries",
        "Buy beers" ];
      return tasks[x];
;
    });
  const delay = Math.random() * 800 + 200; // delay 200~1000ms
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay, result);
  });
}

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      searchString: value
    });
    if (value) {
      // get suggestion items here
      this.getSuggestions(value).then(result => {
        if (this.state.searchString) {
          this.setState({
            suggestions: result
          });
        }
      });
    } else {
      this.setState({
        suggestions: []
      })
    }
  }


  handleClick(e) {
    const result = [e];
    this.state.results.push(result)
    this.setState({
      selectedText: result,
    });
 }

 clearList() {
   this.setState({
     results: [],
     suggestions: [],
     searchString: ''
  })
 }

  render() {
    let suggestions = this.state.suggestions;
    let results = this.state.results;
    let search = this.state.searchString.trim().toLowerCase(); //.trim to remove extra wite spaces

    if (search.length > 0) {
      suggestions = suggestions.filter(function (user) {
        return user.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <h1>Create suggestions List</h1>
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
            {suggestions.map((item, index) => {
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