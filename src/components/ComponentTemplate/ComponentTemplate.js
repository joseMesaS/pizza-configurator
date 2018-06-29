import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {sendAction, sendRequest} from '../../actions/ActionsTemplate'

class ProductsList extends PureComponent {
  static propTypes = {
    listOfElements: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
  }

  createElement = (element) => {
    this.props.sendRequest(element)
  }

  render() {
    return ( <h1> Hello!! </h1>)
  }
}

const mapStateToProps = function (state) {
  return {
    elements: state.ReducerTemplate
  }
}

export default connect(mapStateToProps, { sendAction, sendRequest })(ProductsList)
