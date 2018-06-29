import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PizzaConfigurator from './components/PizzaConfigurator/PizzaConfigurator'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PizzaConfigurator} />
        </div>
      </Router>
    )
  }
}

export default App;
