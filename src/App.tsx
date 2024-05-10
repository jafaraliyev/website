import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import My_app from './Components/my_app';
import Projects from './Components/projects'
export function App() {
  return (

      <Routes>
          <Route path={'/'} element={<My_app/>}/>
          <Route path={'/projects'} element={<Projects/>}/>
      </Routes>

  );
}

export default App;
