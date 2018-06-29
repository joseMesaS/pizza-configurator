import { UPDATE_RECEIPT } from '../actions/PizzaConfig'

const initialEstate = {
  base: '',
  sauce: '',
  topping: [],
  turbo: false,
  total: 0
}

export default function(state = initialEstate, action) {
  switch (action.type) {
  case UPDATE_RECEIPT:
    return action.payload
  default:
    return state
  }
}
