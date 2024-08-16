import React from 'react';
import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import myData from './data.json';

const jsonData : any = myData;

function App() {

  const [data, setData] = useState([]);

  const getData = () => {

    setData(jsonData)

  }

  

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
