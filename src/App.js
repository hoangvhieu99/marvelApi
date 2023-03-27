import React from 'react';
import { Main } from './Components/Main';
import { Description } from './Components/Description';
import './App.css';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:id' element={<Description/>}/>
    </Routes>
    // <div className="App">
    //   <Main/>
    // </div>
  );
}

export default App;
