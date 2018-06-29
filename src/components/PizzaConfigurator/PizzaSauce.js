import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import { FormGroup, Radio } from 'react-bootstrap'
import pizzaMenu from '../../pizzaMenu'

class PizzaSauce extends PureComponent {
  state = {options: Object.keys(pizzaMenu.sauce), selected: ''}


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
    },()=>{this.props.updateReceipt({type: 'pizzaSauce', body: this.state.selected })})
  }


  render() {

    return (
      <div>
        <FormGroup>
          {this.state.options
            .map((radioButton, index) => {
              return <Radio key={index} value={this.state.options[index]}  name="radioGroup2" onChange={this.handleChange}>
                {pizzaMenu.sauce[this.state.options[index]].title}
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

export default connect(mapStateToProps, { updateReceipt })(PizzaSauce)
