import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateReceipt} from '../../actions/PizzaConfig'
import pizzaMenu from '../../pizzaMenu'

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class PizzaSauce extends PureComponent {
  state = {options: Object.keys(pizzaMenu.sauce), selected: ''}


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
    this.setState({
      selected: e.target.value
    },()=>{this.props.updateReceipt({type: 'pizzaSauce', body: this.state.selected })})
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <RadioGroup aria-label="gender" name="gender1" className={classes.group} value={this.state.selected}
            onChange={this.handleChange} >
            {this.state.options
              .map((radioButton, index) => {
                return <FormControlLabel key={index} value={this.state.options[index]} control={<Radio />} name="radioGroup2"
                  label={pizzaMenu.sauce[this.state.options[index]].title +'€'+ pizzaMenu.sauce[this.state.options[index]].price}/>
              })
            }
          </RadioGroup>
        </FormControl>
      </div>
    )}
}

const mapStateToProps = function (state) {
  return {
    pizzaState: state.PizzaReceipt
  }
}

const appWstyles = withStyles(styles)(PizzaSauce)
export default connect(mapStateToProps, { updateReceipt })(appWstyles)
