import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import pizzaMenu from '../../pizzaMenu'
import {FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox} from '@material-ui/core'


class PizzaToppings extends PureComponent {
  state = {options: Object.keys(pizzaMenu.toppings), selected: []}

  static propTypes = {
    pizzaState: PropTypes.shape({
      base: PropTypes.string.isRequired,
      sauce: PropTypes.string.isRequired,
      topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      turboTax: PropTypes.number.isRequired,
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
    return (
      <div>
        <FormControl component="fieldset">
          <FormGroup>
            {this.state.options
              .map((checkButton, index) => {
                return <FormControlLabel
                  key={checkButton}
                  control={ <Checkbox checked={this.state.selected.indexOf(checkButton) !== -1}
                    onChange={this.handleChange}
                    value={this.state.options[index]}
                    disabled={this.state.selected.length>=3 && this.state.selected.indexOf(checkButton) === -1}/> }
                  label={checkButton}
                />
              })
            }
          </FormGroup>
          <FormHelperText>*You can only choose 3 toppings per pizza.</FormHelperText>
        </FormControl>
      </div>
    )}
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}

export default connect(mapStateToProps, { updateReceipt })(PizzaToppings)
