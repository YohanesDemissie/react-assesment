import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      selectedText: "",
      users: [
      "Leonard Rogers"
    ,
    
      "Walker Pace"
    ,
    
      "Lance Mcintyre"
    ,
    
      "Rudyard Conway"
    ,
    
      "Chadwick Oneal"
    ,
    
      "Isaiah Kent"
    ,
    
      "Griffith Perkins"
    ,
    
      "Lawrence Wheeler"
    ,
    
      "Preston Walker"
    ,
    
      "Simon Brewer"
    ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    console.log(result, 'RESULTS');

    this.setState({
      users: result
    });
 }
  render() {
    let users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      users = users.filter(function (user) {
        return user.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <h3>React - simple search</h3>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
          <ul>
            {users.map((item, index) => {
              return (
                <li
                  // value={this.state.selectedText}
                  key={index}
                  onClick={() => this.handleClick(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;