export const UPDATE_RECEIPT = 'UPDATE_RECEIPT'


export function updateReceipt(update) {
  return {
    type: UPDATE_RECEIPT,
    payload: update
  }
}
