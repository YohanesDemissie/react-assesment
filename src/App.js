import React from 'react';
import './App.css';

class App extends React.Component {
  // This function mocks the asynchronous API to fetch     the suggestions by prefix.
  // Example:
  // getSuggestions('fake').then(function(val) {
  //    console.log(val);
  // })
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

  render() {
    return (
      <div>
        <p>
          Please implement a text box with autocomplete suggestions like the screenshot below.
        </p>
        <h2>Notes:</h2>
        <ul>
          <li>Please use the "<b>Fork</b>" button to start your work, so that you could have your private dedicated url. And please send the url back to the recruiter once you are done. </li>
          <li>Please use the provided mock function as the suggestion API. Do not modify it.</li>
          <li>Don't simply use a finished library component providing similar functionalities.</li>
          <li>Please implement the control using React.js.</li>
        </ul>

        <img src="https://vafyqw.bn1301.livefilestore.com/y4m95aNR29WvCX2FZiHr6lGgyYGqWnJp5MzPFHJAQQT-QAwZ08XCwI-ehTJNfGSyuZ7Z0giumulisPaqzQzOftlmFmb6ZAuBK_jDt2KCczcpk9xkKUOV73gWRgvYcDbH97Uzjm4hDW0-NPZ9TMX4Sih9AnCknlZ1Z7i_y16fNAk8SfV0Hn8Y-DjaxrIm7BTVWJs9FgjPdrY5Fgr0V1b5fpBcw?width=660&height=319&cropmode=none" alt="broken"
          style={imgStyle} />
      </div>
    );
  }
}

var imgStyle = {
  width: '660px',
  height: '319px'
}
export default App;
