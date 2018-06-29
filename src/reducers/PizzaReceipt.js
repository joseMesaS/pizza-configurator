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
    const copy = {...state}
    switch (action.payload.type) {
    case 'pizzaBase':
      copy.base = action.payload.body
      return copy
    default:
      return state
    }
  default:
    return state
  }
}
