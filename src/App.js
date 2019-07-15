import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <p>
        Please implement a text box with autocomplete suggestions like the screenshot below.
    </p>
      <p>
        <h2>Notes:</h2>
        <ul>
          <li>Please use the "<b>Fork</b>" button to start your work, so that you could have your private dedicated url. And please send the url back to the recruiter once you are done. </li>
          <li>Please use the provided mock function as the suggestion API. Do not modify it.</li>
          <li>Don't simply use a finished library component providing similar functionalities.</li>
          <li>Please implement the control using React.js.</li>
        </ul>
      </p>

      <img src="https://vafyqw.bn1301.livefilestore.com/y4m95aNR29WvCX2FZiHr6lGgyYGqWnJp5MzPFHJAQQT-QAwZ08XCwI-ehTJNfGSyuZ7Z0giumulisPaqzQzOftlmFmb6ZAuBK_jDt2KCczcpk9xkKUOV73gWRgvYcDbH97Uzjm4hDW0-NPZ9TMX4Sih9AnCknlZ1Z7i_y16fNAk8SfV0Hn8Y-DjaxrIm7BTVWJs9FgjPdrY5Fgr0V1b5fpBcw?width=660&height=319&cropmode=none" alt="demo"
        style={imgStyle} />
    </div>
  );
}

var imgStyle = {
  width: '660px',
  height: '319px'
}
export default App;
