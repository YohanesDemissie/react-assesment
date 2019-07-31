import React from 'react';

// let users = [
//   {
//     name: "Leonard Rogers",
//     email: "egestas@justonecante.org"
//   },
//   {
//     name: "Walker Pace",
//     email: "erat.eget.tincidunt@idsapienCras.org"
//   },
//   {
//     name: "Lance Mcintyre",
//     email: "Nam.ligula@quamvel.net"
//   },
//   {
//     name: "Rudyard Conway",
//     email: "sit@nunc.org"
//   },
//   {
//     name: "Chadwick Oneal",
//     email: "laoreet@dictum.edu"
//   },
//   {
//     name: "Isaiah Kent",
//     email: "diam.dictum@lobortisquam.co.uk"
//   },
//   {
//     name: "Griffith Perkins",
//     email: "congue@acfermentumvel.ca"
//   },
//   {
//     name: "Lawrence Wheeler",
//     email: "ac.libero@Duisac.org"
//   },
//   {
//     name: "Preston Walker",
//     email: "egestas.rhoncus@eudui.co.uk"
//   },
//   {
//     name: "Simon Brewer",
//     email: "nunc.sed@Fuscediamnunc.co.uk"
//   }
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: [{
      name: "Leonard Rogers",
        email: "egestas@justonecante.org"
    },
    {
      name: "Walker Pace",
        email: "erat.eget.tincidunt@idsapienCras.org"
    },
    {
      name: "Lance Mcintyre",
        email: "Nam.ligula@quamvel.net"
    },
    {
      name: "Rudyard Conway",
        email: "sit@nunc.org"
    },
    {
      name: "Chadwick Oneal",
        email: "laoreet@dictum.edu"
    },
    {
      name: "Isaiah Kent",
        email: "diam.dictum@lobortisquam.co.uk"
    },
    {
      name: "Griffith Perkins",
        email: "congue@acfermentumvel.ca"
    },
    {
      name: "Lawrence Wheeler",
        email: "ac.libero@Duisac.org"
    },
    {
      name: "Preston Walker",
        email: "egestas.rhoncus@eudui.co.uk"
    },
    {
      name: "Simon Brewer",
      email: "nunc.sed@Fuscediamnunc.co.uk"
    }]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //NEED TO INCORPORATE
  getSuggestions(prefix) {
  const result = Array
    .from(new Array(10), function (x, i) {
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
// END INCORPORATION

  // componentDidMount() {
  //   // this.setState({
  //   //   users: users
  //   // });
  //   this.refs.search.focus();
  // }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      users = users.filter(function (user) {
        return user.name.toLowerCase().match(search);
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
            {users.map(l => {
              return (
                <li>
                  {l.name} <a href="#">{l.email}</a>
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