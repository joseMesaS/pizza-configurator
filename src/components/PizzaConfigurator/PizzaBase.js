import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import { FormGroup, Radio } from 'react-bootstrap'
import pizzaMenu from '../../pizzaMenu'

class PizzaBase extends PureComponent {
  state = {options: Object.keys(pizzaMenu.baseInCm), selected: ''}


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
    this.setState({
      selected: e.target.value
    },()=>{this.props.updateReceipt({type: 'pizzaBase', body: this.state.selected})})
  }


  render() {

    return (
      <div>
        <FormGroup>
          {this.state.options
            .map((radioButton, index) => {
              return <Radio key={index} value={this.state.options[index]}  name="radioGroup1" onChange={this.handleChange}>
                {pizzaMenu.baseInCm[this.state.options[index]].title} € {pizzaMenu.baseInCm[this.state.options[index]].price}
              </Radio>
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

export default connect(mapStateToProps, { updateReceipt })(PizzaBase)
