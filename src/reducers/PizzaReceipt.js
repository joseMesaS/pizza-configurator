import { UPDATE_RECEIPT } from '../actions/PizzaConfig'
import  pizzaMenu from '../pizzaMenu'
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
      copy.total = ((copy.base !== '') ? pizzaMenu.baseInCm[copy.base].price : 0) +
      ((copy.sauce !== '') ? pizzaMenu.sauce[copy.sauce].price : 0) +
      ((copy.topping.length !== 0) ? copy.topping.reduce((acc, cur) => acc + pizzaMenu.toppings[cur],0)  : 0)
      return copy
    case 'pizzaSauce':
      copy.sauce = action.payload.body
      copy.total = ((copy.base !== '') ? pizzaMenu.baseInCm[state.base].price : 0) +
      ((copy.sauce !== '') ? pizzaMenu.sauce[copy.sauce].price : 0) +
      ((copy.topping.length !== 0) ? copy.topping.reduce((acc, cur) => acc + pizzaMenu.toppings[cur],0)  : 0)
      return copy
    case 'pizzaTopping':
      copy.topping = action.payload.body
      copy.total = ((copy.topping.length !== 0) ? copy.topping.reduce((acc, cur) => acc + pizzaMenu.toppings[cur],0)  : 0)+
      ((copy.base !== '') ? pizzaMenu.baseInCm[copy.base].price : 0)+
      ((copy.sauce !== '') ? pizzaMenu.sauce[copy.sauce].price : 0)
      return copy
    default:
      return state
    }
  default:
    return state
  }
}
