import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: '',
      activeIndex: 0
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //incorporate my own click function
    this.handleClick = this.handleClick.bind(this);
  }

  // Handle Search Function
  getSuggestions(prefix) {
    const result = Array //result becomes state of suggestions: []
      .from(new Array(10), (x, i) => { //controlling array of 10 items only. (length, items)
        // console.log(x, 'THIS')
        // console.log(i, 'THAT')
        return i;
      })
      .map((x) => {
        const mockList = [ //create an array to map through and populate ARRAY
          's',
          'near me',
          'n',
          'in 2019',
          'events',
          'random facts',
          'today',
          'in the US',
          'trend',
          'top 10',
          'styles',
          'others'
        ];
        console.log(prefix, 'THIS')
        console.log(mockList[x], 'THAT')
        if ( mockList[x] === prefix) {
          return prefix;
        }

        // const newStuff = [];
        // newStuff.push(prefix) //push prefix into array
        // // console.log(newStuff[prefix], 'POPULATED ARRAY?');
        // let copy = mockList.slice();
        // copy.map((x, i) => {
        //   console.log(x, 'HELLO')
        // })
        // for (let k = 0; k < copy.length; k++ ) {
        //   // console.log( copy[k], 'HOW MUCH'); //items in array
        //   // console.log(newStuff, 'NEW STUFF') //user input
        //   // if (prefix[k] !== mockList[k]) {
        //   if (newStuff !== copy[k]) {
        //   return mockList[x]
        //   }
        //   return newStuff;
        // }
        let index = Math.floor(Math.random() * 9);
        // console.log(index, 'INDEX'); //creates random number 0-9
        // console.log(mockList[3], 'HERE'); //populated and given an index number
        // console.log(prefix, 'PREFIX'); //returns input value
        // return prefix + ' ' + mockList[x] + ' ' + mockList[index];
      });
    const delay = Math.random() * 800 + 200; // delay 200~1000ms
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, delay, result);
    });
  }

  // compare(mockList, newStuff) {
  //   const finalArray = [];
  //   mockList.forEach((e1) => newStuff.forEach((e2) => {
  //     console.log('MATCH ??')
  //     if (e1 === e2) {
  //       finalArray.push(e1)
  //     }
  //   }))
  //   this.compare(finalArray);
  //   return finalArray;
  // }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      text: value
    });
    if (value) {
      // get suggestion items here
      this.getSuggestions(value).then(result => {
        if (this.state.text) {
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
  
  //incorporate my own click later
  handleClick(selectedText) {
    this.setState({
      activeIndex: 0,
      text: selectedText,
      suggestions: []
    });
  }

  // suggestionSelected(value) {
  //   this.setState({
  //     text: value,
  //     suggestions: []
  //   })
  // }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (!suggestions) return null;
    else {
      const list =
        <ul>
          {suggestions.map((item, index) =>
            <li
              className={
                index === this.state.activeIndex ? 'active' : ''
              }
              key={index}
              onClick={() => this.handleClick(item)}
            > {item} </li>
          )
          }
        </ul>
      return list;
    }
  }

  render() {
    return (
          <div>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input type='submit' value='add' placeholder='search tasks' />
          {this.renderSuggestions()}
          </div>
    );
  }
}

export default App


// import React from 'react';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       input: '',
//       tasks: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.getSuggestions = this.getSuggestions.bind(this);
//   }

//   //start up helper function and array
//   getSuggestions(prefix) {
//     console.log('HELLO')
//     const result = Array //array of suggestions
//       .from(new Array(10), function (x, i) { //item index
//         console.log(x, 'HELLO');
//         return i;
//       })
//       .map(function (x) {
//         const tasksList = ['clean car', 'fold clothes', 'buy groceries', 'pick up kids', 'watch \'Stranger Things\' season 3']
//         console.log(tasksList)
//         return prefix + ' ' + tasksList[x];
//       });
//     const delay = Math.random() * 800 + 200; // delay 200~1000ms
//     return new Promise(function (resolve, reject) {
//       setTimeout(resolve, delay, result);
//     });
//   }

//   handleChange(e) {
//     const value = e.target.value
//     this.setState({ input: value });
//     console.log(value);
//   }


//   render() {
//     return(
//       <div>
//         <input onChange={this.handleChange} placeholder="search" style={styles.inputStyle} />
//         <datalist >{this.getSuggestions}</datalist>
//       </div>
//     )
//   }
// }

// const styles = {
//   inputStyle: {
//     marginTop: '30px',
//     marginLeft: '15px',
//     width: '400px',
//     height: '50px',
//     fontSize: '30px'
//   }
// }

// export default App;
