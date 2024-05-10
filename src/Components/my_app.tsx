import React from 'react';
import Terminal from './terminal';
import '../App.css';
import '../Style/my_app.css'
import my_app from './message';
import { ReactTyped } from "react-typed";
export default function My_app() {
  return (
    <div className="body">
        <div className='crt-monitor'>
          <ReactTyped strings={["Hi, my name is Jafar Aliyev. Welcome to my website. Type 'help' to start"]} 
          showCursor={false} 
          typeSpeed={50} 
          backDelay={10000000} 
          className="terminal-text"/>
          <Terminal/> 
        </div>
    </div>
  );
}

