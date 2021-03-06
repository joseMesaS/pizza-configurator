import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import pizzaMenu from '../../pizzaMenu'
import {updateReceipt} from '../../actions/PizzaConfig'
import {FormControlLabel, Checkbox} from '@material-ui/core'

class ShowReceipt extends PureComponent {
  state = {turbo: false}
  static propTypes = {
    pizzaState: PropTypes.shape({
      base: PropTypes.string.isRequired,
      sauce: PropTypes.string.isRequired,
      topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      turboTax: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired
  }

  turboDelivery = () => {
    !this.state.turbo ? this.setState({turbo: true},()=>{this.props.updateReceipt({type: 'turbo', body: 0 })}) : this.setState({turbo: false},()=>{this.props.updateReceipt({type: 'turbo', body: 0 })})
  }

  round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render() {
    return (
      <div className = 'receipt'>
        <h3>Order:</h3>
        <ul>
          <li>Base: {this.props.pizzaState.base !== '' && (pizzaMenu.baseInCm[this.props.pizzaState.base]).title + '   €'+(pizzaMenu.baseInCm[this.props.pizzaState.base]).price} </li>
          <li>Sauce: {this.props.pizzaState.sauce !== '' && (pizzaMenu.sauce[this.props.pizzaState.sauce]).title+ '   €'+(pizzaMenu.sauce[this.props.pizzaState.sauce]).price}</li>
          <li>Toppings: <ul> {this.props.pizzaState.topping !== [] && this.props.pizzaState.topping.map(top=> {return <li key={top}>{top+ '   €'+(pizzaMenu.toppings[top])}</li>})} </ul></li>
        </ul>
        <FormControlLabel control={ <Checkbox checked={this.state.turbo} onChange={this.turboDelivery} /> }
          label='Turbo Drone Delivery + 10%' />
        <hr/>
        <h4>Total to Pay: {!this.state.turbo && this.round(this.props.pizzaState.total,2)} {this.state.turbo && this.round((this.props.pizzaState.turboTax + this.props.pizzaState.total),2) }</h4>
      </div>
    )}
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}

export default connect(mapStateToProps, {updateReceipt})(ShowReceipt)
