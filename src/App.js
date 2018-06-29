import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ComponentTemplate from './components/ComponentTemplate/ComponentTemplate'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ComponentTemplate} />
        </div>
      </Router>
    )
  }
}

export default App;
