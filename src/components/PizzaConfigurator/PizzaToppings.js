import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import { FormGroup, Checkbox } from 'react-bootstrap'
import pizzaMenu from '../../pizzaMenu'

class PizzaToppings extends PureComponent {
  state = {options: Object.keys(pizzaMenu.toppings), selected: []}


  static propTypes = {
    pizzaState: PropTypes.shape({
      base: PropTypes.string.isRequired,
      sauce: PropTypes.string.isRequired,
      topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      turbo: PropTypes.bool.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired
  }

  handleChange = (e) => {
    if (e.target.checked) {
      this.setState({
        selected: [...this.state.selected, e.target.value]
      },()=>{this.props.updateReceipt({type: 'pizzaTopping', body: this.state.selected })})
    }else if(!e.target.checked) {
      this.setState({
        selected: [...this.state.selected].filter(element =>  element !== e.target.value )
      },()=>{this.props.updateReceipt({type: 'pizzaTopping', body: this.state.selected })})
    }
  }

  render() {
    console.log(this.state.options)
    console.log(this.state.selected)
    return (
      <div>
        <FormGroup>
          {this.state.options
            .map((checkButton, index) => {
              return <Checkbox key={index} value={this.state.options[index]}  name="radioGroup1" onChange={this.handleChange} disabled={this.state.selected.length>=3 && this.state.selected.indexOf(checkButton) === -1}>
                {checkButton}
              </Checkbox>
            })
          }
        </FormGroup>
      </div>
    )}
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}

export default connect(mapStateToProps, { updateReceipt })(PizzaToppings)
