import AddToDo from "../container/AddToDo";
import ConnectedFilterList from "../container/ConnectedFilterList";
import ConnectedTagList from "../container/ConnectedTagList";
import ConnectedTodoList from "../container/ConnectedTodoList";
import React from "react";

export default () => (
  <div className="row my-mt-5" id="content">
    <div className="col-lg-2 col-sm-4" id="sidebar">
      <div className="text-center">
        <AddToDo />
      </div>
      <div className="column">
        <span className="font-weight-bold">Filters</span>
        <ConnectedFilterList />
      </div>
      <div className="column" id="tag">
        <span className="font-weight-bold">Tags</span>
        <ConnectedTagList />
      </div>
      <div className="column" id="priority">
        <span className="font-weight-bold">Priorities</span>
        <select className="form-control">
          <option value="all">All</option>
        </select>
      </div>
      <div className="column" id="order">
        <span className="font-weight-bold">Order by</span>
        <select className="form-control">
          <option value="az">A to Z</option>
        </select>
      </div>
    </div>
    <div className="col-lg-10 col-sm-8" id="content">
      <h2 className="text-center">Your Todo List</h2>
      <ConnectedTodoList />
    </div>
  </div>
);
