import React from 'react';
import Todos from './components/Todos.js'
import hocWithFetch from "./hoc/HocWithFetch";

// create the Todos wrapped in the HOC
const TodosWithFetch = hocWithFetch(
  Todos,
  "https://jsonplaceholder.typicode.com/todos"
);

function App() {
  return (
    <div>
      <TodosWithFetch />
    </div>
  );
}

export default App;
