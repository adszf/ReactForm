import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA = [
  //{ id: "todo-0", name: "Eat", completed: true },
  //{ id: "todo-1", name: "Sleep", completed: false },
  //{ id: "todo-2", name: "Repeat", completed: false }
];
const FILTERS = [
  { id: "filters-1", name: "Show" },
  { id: "Filters-2", name: "All" },
  { id: "Filters-3", name: "Tasks" }
];
//console.log(DATA)
ReactDOM.render(
  <App tasks={DATA} filters={FILTERS} />, document.getElementById("root"));
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


