import { ACTION_TYPE_ONE, ACTION_TYPE_TWO } from '../actions/ActionsTemplate'

export default function(state = {}, action) {
  switch (action.type) {
  case ACTION_TYPE_ONE:
    return { succes: true }
  case ACTION_TYPE_TWO:
    return { error: action.payload }
  default:
    return state
  }
}
