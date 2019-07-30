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
    const mockList = [ //create an array to map through and populate ARRAY
      'near me',
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
    const result = Array //result becomes state of suggestions: []
      .from(new Array(10), (x, i) => { //controlling array of 10 items only. (length, items)
        // console.log(x, 'THIS')
        // console.log(i, 'THAT')
        return i;
      })
      .map((x) => {
        // console.log(prefix, 'THIS');
        // console.log(mockList[x], 'THAT');
        mockList.forEach(function (element) {
          let letters = element.split('');
          if(letters[x] === prefix) {
            console.log(prefix[0], 'WE DID IT')
            return prefix[0]
          }return prefix[0]
          // console.log(letters,' ARE WE SPLIT YET');
          // console.log(element[i], 'ELEMEMNT');
          // console.log(letters[x], 'LETTERS')
          // console.log(prefix[i], "PREFIX"); //returns input
          // if(letters[x] !== prefix) {
          //   return 'HELLO'
          // }

        }); return this.state.text
        // if( mockList[x] === prefix){
        //   return <b>{prefix}</b>;
        // }
        // let index = Math.floor(Math.random() * 9);
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
