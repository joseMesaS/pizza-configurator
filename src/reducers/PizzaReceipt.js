import { PIZZA_BASE, PIZZA_SAUCE, PIZZA_TOPPINGS, TURBO_DELIVERY } from '../actions/PizzaConfig'
import  pizzaMenu from '../pizzaMenu'
const initialEstate = {
  base: '',
  sauce: '',
  topping: [],
  turboTax: 0,
  total: 0
}

const PizzaReceipt = (state = initialEstate, action) => {
  const copy = {...state}
  switch (action.type) {
  case PIZZA_BASE:
    copy.base = action.payload
    copy.total = ((copy.base !== '') ? pizzaMenu.baseInCm[copy.base].price : 0) +
    ((copy.sauce !== '') ? pizzaMenu.sauce[copy.sauce].price : 0) +
    ((copy.topping.length !== 0) ? copy.topping.reduce((acc, cur) => acc + pizzaMenu.toppings[cur],0)  : 0)
    copy.turboTax = copy.total/10
    return copy
  case PIZZA_SAUCE:
    copy.sauce = action.payload
    copy.total = ((copy.base !== '') ? pizzaMenu.baseInCm[state.base].price : 0) +
    ((copy.sauce !== '') ? pizzaMenu.sauce[copy.sauce].price : 0) +
    ((copy.topping.length !== 0) ? copy.topping.reduce((acc, cur) => acc + pizzaMenu.toppings[cur],0)  : 0)
    copy.turboTax = copy.total/10
    return copy
  case PIZZA_TOPPINGS:
    copy.topping = action.payload
    copy.total = ((copy.topping.length !== 0) ? copy.topping.reduce((acc, cur) => acc + pizzaMenu.toppings[cur],0)  : 0)+
    ((copy.base !== '') ? pizzaMenu.baseInCm[copy.base].price : 0)+
    ((copy.sauce !== '') ? pizzaMenu.sauce[copy.sauce].price : 0)
    copy.turboTax = copy.total/10
    return copy
  case TURBO_DELIVERY:
    copy.turboTax = copy.total/10
    return copy
  default:
    return state
  }
}

export default PizzaReceipt
