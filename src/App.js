import React from 'react';
import './App.css';
import null_logo from './null_logo.png'

const App = () => (
  <div className="container">
    <div className="sidebar">
      <div className="line-center">
        <img src={null_logo} width={"50px"} height={"50px"}/>
        <p>Nguyen Tan Phat</p>
      </div>
      <div className="line">
        <button onClick={() => {alert('create new todo')}}>Create new todo</button>
      </div>
      <div className="line">
        <div className="column">
          <span>Filters</span>
          <a href="#">
            <span>icon</span>
            <span>Pending</span>
          </a>
          <a href="#">
            <span>icon</span>
            <span>Not done</span>
          </a>
          <a href="#">
            <span>icon</span>
            <span>Finished</span>
          </a>
          <a href="#">
            <span>icon</span>
            <span>Canceled</span>
          </a>
        </div>
      </div>
      <div className="line">
        <div className="column">
          <span>Tags</span>
          <a href="#">
            <span>tag_icon</span>
            <span>Frontend</span>
          </a>
          <a href="#">
            <span>tag_icon</span>
            <span>Backend</span>
          </a>
          <a href="#">
            <span>tag_icon</span>
            <span>API</span>
          </a>
          <a href="#">
            <span>tag_icon</span>
            <span>Issue</span>
          </a>
        </div>
      </div>
      <div className="line">
        <div className="column">
          <span>Priorities</span>
          <select>
            <option value="all">All</option>
          </select>
        </div>
      </div>
      <div className="line">
        <div className="column">
          <span>Order by</span>
          <select>
            <option value="az">A to Z</option>
          </select>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="line">
        <h1>Todo list</h1>
		<input placeholder="Search todo...." className="right"/>
      </div>
	  <div className="line">
        <h1>Table</h1>
      </div>
    </div>
  </div>
)

export default App;
