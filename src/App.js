import React from 'react';
import logo from './logo.svg';
import './App.css';
import convertedObjects from './utils/figma'

function App() {
  const borderRadius = convertedObjects["8"].value; // "8"
  const fontSizeH1 = convertedObjects["h1"].value.fontSize; // "32"
  const primaryColor = convertedObjects["blue"].value; // "#5648ff"
  console.log('aa', borderRadius, fontSizeH1, primaryColor)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: convertedObjects["blue"].value}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
