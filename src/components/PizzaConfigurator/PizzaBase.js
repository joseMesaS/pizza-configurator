import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'

class PizzaBase extends PureComponent {
  static propTypes = {
    base: PropTypes.number.isRequired,
    sauce: PropTypes.string.isRequired,
    topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    turbo: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired
  }



  render() {
    return ( <h1> Hello!! </h1>)
  }
}

const mapStateToProps = function (state) {
  return {
    elements: state.PizzaReceipt
  }
}

export default connect(mapStateToProps, { updateReceipt })(PizzaBase)
