import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import ShowReceipt from './ShowReceipt'


import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './PizzaConfigurator.css'
const styles = theme => ({
  root: {

    width: '50%',
    marginRight: '30px'

  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(17),
    color: theme.palette.text.secondary,
  },
})

class PizzaConfigurator extends PureComponent {
  state = {
    expanded: null,
  }

  static propTypes = {
    pizzaState: PropTypes.shape({
      base: PropTypes.string.isRequired,
      sauce: PropTypes.string.isRequired,
      topping:  PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      turboTax: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired
  }


  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className='content'>

        <div className={classes.root}>
          <h1>Pizza Configurator</h1>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Pizza sizes</Typography>
              <Typography className={classes.secondaryHeading}>chose the size of your pizzas base</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <PizzaBase/>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Sauce</Typography>
              <Typography className={classes.secondaryHeading}>chose your sauce</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <PizzaSauce/>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Toppings</Typography>
              <Typography className={classes.secondaryHeading}>Cost is €0.5 per topping. *only 3 toppings per pizza allowed</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <PizzaToppings/>

            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

        <ShowReceipt />
      </div>)
  }
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}
const appWstyles = withStyles(styles)(PizzaConfigurator)
export default connect(mapStateToProps, { updateReceipt })(appWstyles)
