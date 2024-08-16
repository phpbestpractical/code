import React from 'react';
import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import myData from './data.json';
import SearchComponent from './SearchComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

const jsonData : any = myData;

function App() {

  const [namelist, setData] = useState([]);

  const getData = () => {

    setData(jsonData)

  }

  

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <SearchComponent nameList={namelist} />
    </div>
  );
}

export default App;
