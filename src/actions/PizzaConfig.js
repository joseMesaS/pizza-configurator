export const UPDATE_RECEIPT = 'UPDATE_RECEIPT'
export const PIZZA_BASE = 'PIZZA_BASE'
export const PIZZA_SAUCE = 'PIZZA_SAUCE'
export const PIZZA_TOPPINGS = 'PIZZA_TOPPINGS'
export const TURBO_DELIVERY = 'TURBO_DELIVERY'


export const updateReceipt = (update) => (dispatch) => {
  switch (update.type) {
  case 'pizzaBase':
    dispatch({
      type: PIZZA_BASE,
      payload: update.body
    })
    break
  case 'pizzaSauce':
    dispatch({
      type: PIZZA_SAUCE,
      payload: update.body
    })
    break
  case 'pizzaTopping':
    dispatch({
      type: PIZZA_TOPPINGS,
      payload: update.body
    })
    break
  case 'turbo':
    dispatch({
      type: TURBO_DELIVERY,
      payload: update.body
    })
    break
  default:
    break;

  }
}
