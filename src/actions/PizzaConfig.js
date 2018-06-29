export const UPDATE_RECEIPT = 'UPDATE_RECEIPT'


export function updateReceipt(pizza) {
  return {
    type: UPDATE_RECEIPT,
    payload: pizza
  }
}
