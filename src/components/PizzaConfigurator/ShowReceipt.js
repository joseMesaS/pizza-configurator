import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import pizzaMenu from '../../pizzaMenu'


class ShowReceipt extends PureComponent {
  static propTypes = {
    pizzaState: PropTypes.shape({
      base: PropTypes.string.isRequired,
      sauce: PropTypes.string.isRequired,
      topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      turbo: PropTypes.bool.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired
  }


  render() {

    return (
      <div>
        <h3>Order:</h3>
        <ul>
          <li>Base: {this.props.pizzaState.base !== '' && (pizzaMenu.baseInCm[this.props.pizzaState.base]).title} </li>
          <li>Sauce: {this.props.pizzaState.sauce !== '' && (pizzaMenu.sauce[this.props.pizzaState.sauce]).title}</li>
          <li>Toppings: <ul> {this.props.pizzaState.topping !== [] && this.props.pizzaState.topping.map(top=> {return <li key={top}>{top}</li>})} </ul></li>
        </ul>
        <hr/>
        <h6>Total to Pay: {this.props.pizzaState.total}</h6>
      </div>
    )}
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}

export default connect(mapStateToProps)(ShowReceipt)
