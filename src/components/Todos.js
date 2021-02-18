import React from 'react';
  
class Todos extends React.Component {
  
  renderTodos() {
    if (!this.props.data) return;
    return this.props.data.map( todo => 
        <ul key={todo.id}>
            <li>{todo.title}</li>
        </ul>)
  }
  
  render() {
    return (
        <div>
          {this.renderTodos()}
          <button onClick={() => this.props.getData("https://jsonplaceholder.typicode.com/posts")}>
            Load Data
          </button>
        </div>
      );
  }
}

export default Todos;