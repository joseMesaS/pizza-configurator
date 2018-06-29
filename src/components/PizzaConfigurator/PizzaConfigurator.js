import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import { PanelGroup, Panel } from 'react-bootstrap'

class PizzaConfigurator extends PureComponent {
  static propTypes = {
    pizzaState: PropTypes.shape({
      base: PropTypes.string.isRequired,
      sauce: PropTypes.string.isRequired,
      topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      turbo: PropTypes.bool.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired
  }

  createElement = (element) => {
    this.props.sendRequest(element)
  }

  render() {
    return (
      <div className='container'><h1> Hello!! </h1>
        <PanelGroup accordion id="accordion-example">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              butcher vice
              <PizzaBase/>
            </Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              butcher vice
              <PizzaSauce/>
            </Panel.Body>
          </Panel>
        </PanelGroup>
      </div>)
  }
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}

export default connect(mapStateToProps, { updateReceipt })(PizzaConfigurator)
