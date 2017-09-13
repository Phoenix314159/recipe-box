import React, { Component } from 'react';
import '../styles/css/App.css';
import RecipeBox from './RecipeBox';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
          <RecipeBox />
          <button className="btn btn-primary">Add Recipe</button>
      </div>
    );
  }
}

export default App;
